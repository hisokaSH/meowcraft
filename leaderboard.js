// api/shop/leaderboard.js
// Get top supporters leaderboard

const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) return cachedDb;
    const client = await MongoClient.connect(MONGODB_URI);
    cachedDb = client.db('meowcraft');
    return cachedDb;
}

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Get top 10 supporters by total spent
        const topSupporters = await usersCollection
            .find({ totalSpent: { $gt: 0 } })
            .sort({ totalSpent: -1 })
            .limit(10)
            .project({
                _id: 0,
                discordId: 1,
                username: 1,
                avatar: 1,
                minecraftUsername: 1,
                totalSpent: 1,
                purchaseCount: { $size: { $ifNull: ['$purchases', []] } }
            })
            .toArray();

        // Add rank to each user
        const leaderboard = topSupporters.map((user, index) => ({
            rank: index + 1,
            username: user.username,
            avatar: user.avatar,
            discordId: user.discordId,
            minecraftUsername: user.minecraftUsername,
            totalSpent: user.totalSpent,
            purchaseCount: user.purchases?.length || 0
        }));

        res.status(200).json({ leaderboard });

    } catch (error) {
        console.error('Leaderboard error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
