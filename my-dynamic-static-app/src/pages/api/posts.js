import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const posts = await db.collection('post').find({}).toArray();
    res.status(200).json(posts);
}