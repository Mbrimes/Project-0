const {MongoClient} = require('mongodb');
const Db = "mongodb+srv://Marabs:cMO5PuJHYQwwF8q9@cluster0.0h9y9gr.mongodb.net/employees?retryWrites=true&w=majority";
const client = new MongoClient(Db);

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