import { MongoClient } from "mongodb";
let connectedClient;
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // Store Message
    const newMessage = {
      email,
      name,
      message,
    };

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.bvxn1ec.mongodb.net/?retryWrites=true&w=majority`;

    try {
      const client = new MongoClient(connectionString);
      connectedClient = await client.connect();
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      console.error(error.message);
    }

    try {
      const db = connectedClient.db("contact");
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch {
      res.status(500).json({ message: "Storing Message Failed" });
    }

    res
      .status(201)
      .json({ message: "Successfully stored Message", message: newMessage });
  }
}

export default handler;
