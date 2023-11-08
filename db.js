const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
const dbName = "example";

async function connect() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.error(err.stack);
    }
}

async function close() {
    try {
        await client.close();
        console.log("Successfully disconnected from Atlas");
    } catch (err) {
        console.error(err.stack);
    }
}

async function insertDocument(collectionName, document) {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    try {
        const result = await collection.insertOne(document);
        return result;
    } catch (error) {
        console.error("Error inserting document:", error);
    }
}

async function findDocuments(collectionName, query) {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    try {
        const documents = await collection.find(query).toArray();
        return documents;
    } catch (error) {
        console.error("Error finding documents:", error);
    }
}

module.exports = {
    connect,
    close,
    insertDocument,
    findDocuments,
};
