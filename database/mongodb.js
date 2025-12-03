require('dotenv').config();
const db_name = process.env.DB_NAME;
const db_pw = process.env.DB_PASSWORD;

console.log(name);

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://delicious-discoveries:${db_pw}@dev-aws-deliciousdiscov.w4xkuce.mongodb.net/?appName=dev-aws-deliciousdiscoveries`;
let db = null

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// export async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

export async function connectDB() {
    if (db) return db;

    await client.connect();
    db = client.db(db_name);
    return db;
}