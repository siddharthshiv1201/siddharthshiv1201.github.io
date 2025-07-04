import { MongoClient } from "mongodb";
const uri = "mongodb://127.0.0.1:27050/"
const client = new MongoClient(uri);
async function insertTestData() {
  try {
    await client.connect();
    const db = client.db("mydatabase");
    const collection =   db.collection("customers");
    // const res = await collection.countDocuments()
    // console.log(res)
    const bulk = [];
    for (let i = 0; i < 900000; i++) {
      bulk.push({
        userId: i,
        name: `User${i}`,
        email: `user${i}@test.com`,
        createdAt: new Date(),
      });
    }
    const result = await collection.insertMany(bulk);
    console.log(`Inserted ${result.insertedCount} documents.`);
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    await client.close();
  }
}
insertTestData();

// 
db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [{role:"root", db:"admin"}]
})