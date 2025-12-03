require('dotenv').config()
const db_name = process.env.DB_NAME;
const db_pw = process.env.DB_PASSWORD;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://delicious-discoveries:${db_pw}@dev-aws-deliciousdiscov.w4xkuce.mongodb.net/?appName=dev-aws-deliciousdiscoveries`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db = null

export async function run() {
  try {
    db = client.db("sample_mflix");
    db.collection("users");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

