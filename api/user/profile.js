// api/user/profile.js
// Get user profile data

const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) return cachedDb;
    const client = await MongoClient.connect(MONGODB_URI);
    cachedDb = client.db('meowcraft');
    return cachedDb;
}

function verifyToken(token) {
    try {
        const payload = JSON.parse(Buffer.from(token, 'base64').toString());
        if (payload.exp < Date.now()) return null;
        return payload.userId;
    } catch {
        return null;
    }
}

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Verify authentication
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    const userId = verifyToken(token);

    if (!userId) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }

    try {
        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Get user with their data
        const user = await usersCollection.findOne({ discordId: userId });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Calculate leaderboard rank
        const usersAbove = await usersCollection.countDocuments({
            totalSpent: { $gt: user.totalSpent || 0 }
        });
        const leaderboardRank = usersAbove + 1;

        // Return profile data
        res.status(200).json({
            discordId: user.discordId,
            username: user.username,
            avatar: user.avatar,
            minecraftUsername: user.minecraftUsername,
            purchases: user.purchases || [],
            totalSpent: user.totalSpent || 0,
            roles: user.roles || [],
            leaderboardRank,
            createdAt: user.createdAt,
        });

    } catch (error) {
        console.error('Profile error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
