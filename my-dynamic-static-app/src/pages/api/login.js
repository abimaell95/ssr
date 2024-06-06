import { verifyPassword, generateToken } from '../../lib/auth';
import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { email, password } = req.body;

    const client = await connectToDatabase();
    const db = client.db();

    const user = await db.collection('users').findOne({ email });

    if (!user) {
        return res.status(401).json({ message: 'No user found!' });
    }

    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
        return res.status(401).json({ message: 'Invalid password!' });
    }

    const token = generateToken(user);

    res.status(200).json({ token });
}
