const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Marabs:cMO5PuJHYQwwF8q9@cluster0.0h9y9gr.mongodb.net/blog?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('blog');
    const collection = db.collection('posts');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);