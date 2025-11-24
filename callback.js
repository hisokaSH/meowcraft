// api/auth/discord/callback.js
// Discord OAuth2 Callback Handler for Vercel

const { MongoClient } = require('mongodb');

// Environment variables (set these in Vercel dashboard)
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) return cachedDb;
    
    const client = await MongoClient.connect(MONGODB_URI);
    cachedDb = client.db('meowcraft');
    return cachedDb;
}

// Simple JWT-like token generation (for production, use proper JWT library)
function generateToken(userId) {
    const payload = {
        userId,
        exp: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
    };
    return Buffer.from(JSON.stringify(payload)).toString('base64');
}

module.exports = async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.redirect('/login.html?error=no_code');
    }

    try {
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
                redirect_uri: `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}/api/auth/discord/callback`,
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
                Authorization: `Bearer ${tokenData.access_token}`,
            },
        });

        const discordUser = await userResponse.json();

        // Connect to MongoDB
        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Check if user exists
        let user = await usersCollection.findOne({ discordId: discordUser.id });

        if (user) {
            // Update existing user
            await usersCollection.updateOne(
                { discordId: discordUser.id },
                {
                    $set: {
                        username: discordUser.username,
                        avatar: discordUser.avatar,
                        lastLogin: new Date(),
                    }
                }
            );
        } else {
            // Create new user
            user = {
                discordId: discordUser.id,
                username: discordUser.username,
                avatar: discordUser.avatar,
                minecraftUsername: null,
                purchases: [],
                totalSpent: 0,
                roles: [],
                createdAt: new Date(),
                lastLogin: new Date(),
            };
            await usersCollection.insertOne(user);
        }

        // Generate session token
        const token = generateToken(discordUser.id);

        // Prepare user data for frontend (exclude sensitive info)
        const userData = {
            discordId: discordUser.id,
            username: discordUser.username,
            avatar: discordUser.avatar,
            minecraftUsername: user.minecraftUsername,
            createdAt: user.createdAt,
        };

        // Redirect to frontend with token
        const userDataEncoded = encodeURIComponent(JSON.stringify(userData));
        res.redirect(`/auth-success.html?token=${token}&user=${userDataEncoded}`);

    } catch (error) {
        console.error('Auth error:', error);
        res.redirect('/login.html?error=auth_failed');
    }
};
