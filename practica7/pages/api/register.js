import { hashPassword } from "../../lib/auth";
import { connectToDatabase } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    return res.status(422).json({ message: "User exists already!" });
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
}
