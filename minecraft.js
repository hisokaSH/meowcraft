// api/user/minecraft.js
// Link Minecraft username to account

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
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
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
        const { minecraftUsername } = req.body;

        // Validate username format
        if (!minecraftUsername || !/^[a-zA-Z0-9_]{3,16}$/.test(minecraftUsername)) {
            return res.status(400).json({ error: 'Invalid Minecraft username format' });
        }

        const db = await connectToDatabase();
        const usersCollection = db.collection('users');

        // Check if username is already taken by another user
        const existingUser = await usersCollection.findOne({
            minecraftUsername: minecraftUsername,
            discordId: { $ne: userId }
        });

        if (existingUser) {
            return res.status(409).json({ error: 'This Minecraft username is already linked to another account' });
        }

        // Update user's Minecraft username
        await usersCollection.updateOne(
            { discordId: userId },
            { $set: { minecraftUsername: minecraftUsername } }
        );

        res.status(200).json({
            success: true,
            minecraftUsername: minecraftUsername
        });

    } catch (error) {
        console.error('Minecraft link error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
