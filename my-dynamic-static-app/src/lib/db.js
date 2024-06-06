
import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }
     console.log ('Este es mongouri',process.env.MONGODB_URI)
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db(process.env.MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
    return true;

}
