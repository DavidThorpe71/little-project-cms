import express from 'express';
import { MongoClient } from "mongodb";

// Mongo Stuff
async function start() {

  const url = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017";
  const dbName = "dockerApp";
  const collectionName = "count";

  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);


  // Express stuff
  const app = express()
  const port = 3000
  app.get('/', (req, res) => res.send("Noppppp"))

  app.get('/create', async (req, res) => {
    const dbRes = await collection.insertOne({});
    res.send({ inserted: dbRes.insertedCount })
  })

  app.listen(port, () => console.log("Running on Port 3000"))
}

start().catch(err => {
  console.log(err);
  process.exit(1);
});