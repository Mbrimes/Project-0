const {MongoClient} = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
	try{
		await client.connect();
		const db = client.db('employees');
		const collection = db.collection('records');

		//find the first document in the collection
		const first = await collection.findOne();
		console.log(first);
	}
	finally {
			//close the database connection when finished or an error occurs
			await client.close();
		}
}
run().catch(console.error)