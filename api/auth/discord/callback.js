// api/auth/discord/callback.js
// Discord OAuth2 Callback Handler with Token Storage

const { MongoClient } = require('mongodb');

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) return cachedDb;
    
    const client = await MongoClient.connect(MONGODB_URI);
    cachedDb = client.db('meowcraft');
    return cachedDb;
}

// Simple token generation for session
function generateToken(userId) {
    const payload = {
        userId,
        exp: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
    };
    return Buffer.from(JSON.stringify(payload)).toString('base64');
}

// Auto-join user to Discord server (optional)
async function addUserToGuild(accessToken, userId) {
    if (!DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) return;
    
    try {
        await fetch(`https://discord.com/api/guilds/${DISCORD_GUILD_ID}/members/${userId}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bot ' + DISCORD_BOT_TOKEN,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_token: accessToken,
            }),
        });
        console.log('User added to guild');
    } catch (error) {
        console.error('Failed to add user to guild:', error);
    }
}

module.exports = async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.redirect('/login.html?error=no_code');
    }

    try {
        const protocol = req.headers['x-forwarded-proto'] || 'https';
        const host = req.headers.host;
        const redirectUri = `${protocol}://${host}/api/auth/discord/callback`;

        // Exchange code for access token
        const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: DISCORD_CLIENT_ID,
                client_secret: DISCORD_CLIENT_SECRET,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri,
            }),
        });

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
            console.error('Token error:', tokenData);
            return res.redirect('/login.html?error=token_error');
        }

        // Get user info from Discord
        const userResponse = await fetch('https://discord.com/api/users/@me', {
            headers: {
                Authorization: 'Bearer ' + tokenData.access_token,
            },
        });

        const discordUser = await userResponse.json();

        // Connect to MongoDB
        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Calculate token expiration
        const tokenExpires = new Date(Date.now() + (tokenData.expires_in * 1000));

        // Check if user exists
        let user = await usersCollection.findOne({ discordId: discordUser.id });

        if (user) {
            // Update existing user with new tokens
            await usersCollection.updateOne(
                { discordId: discordUser.id },
                {
                    $set: {
                        username: discordUser.username,
                        avatar: discordUser.avatar,
                        email: discordUser.email || null,
                        accessToken: tokenData.access_token,
                        refreshToken: tokenData.refresh_token,
                        tokenExpires: tokenExpires,
                        tokenScope: tokenData.scope,
                        lastLogin: new Date(),
                    }
                }
            );
        } else {
            // Create new user with tokens
            user = {
                discordId: discordUser.id,
                username: discordUser.username,
                avatar: discordUser.avatar,
                email: discordUser.email || null,
                accessToken: tokenData.access_token,
                refreshToken: tokenData.refresh_token,
                tokenExpires: tokenExpires,
                tokenScope: tokenData.scope,
                minecraftUsername: null,
                purchases: [],
                totalSpent: 0,
                roles: [],
                createdAt: new Date(),
                lastLogin: new Date(),
            };
            await usersCollection.insertOne(user);
        }

        // Try to add user to Discord server (optional)
        await addUserToGuild(tokenData.access_token, discordUser.id);

        // Generate session token
        const token = generateToken(discordUser.id);

        // Prepare user data for frontend (exclude sensitive tokens!)
        const userData = {
            discordId: discordUser.id,
            username: discordUser.username,
            avatar: discordUser.avatar,
            minecraftUsername: user.minecraftUsername,
            createdAt: user.createdAt,
        };

        // Redirect to frontend with token
        const userDataEncoded = encodeURIComponent(JSON.stringify(userData));
        res.redirect('/auth-success.html?token=' + token + '&user=' + userDataEncoded);

    } catch (error) {
        console.error('Auth error:', error);
        res.redirect('/login.html?error=auth_failed');
    }
};
