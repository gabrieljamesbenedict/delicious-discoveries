import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

const db_name = process.env.DB_NAME;
const db_pw = process.env.DB_PASSWORD;

const uri = `mongodb+srv://delicious-discoveries:${db_pw}@dev-aws-deliciousdiscov.w4xkuce.mongodb.net/?appName=dev-aws-deliciousdiscoveries`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function run(collectionName, crud) {
  const db = client.db(db_name);
  const coll = db.collection(collectionName);

  return await crud(coll);
}

// run().catch(console.dir);
