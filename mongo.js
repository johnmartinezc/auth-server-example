const { MongoClient } = require("mongodb");

let database;

async function mongoConnect() {
	// Connection URI
	const uri = process.env.MONGO_URI;
	// Create a new MongoClient
	const client = new MongoClient(uri);
	try {
		// Connect the client to the server
		await client.connect();
		database = await client.db("test");
		// Establish and verify connection
		console.log("db connected");
	} catch (error) {
		throw Error("Could not connect to MongoDB. " + error);
	}
}
// retuning 
function db() {
	return database;
}
module.exports = {
	mongoConnect,
	db,
};