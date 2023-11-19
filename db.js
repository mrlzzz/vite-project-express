// Database controller

const { MongoClient } = require("mongodb");

require("dotenv").config();

const uri = process.env.MONGODB_URI || "Can't read dotenv mongo";
const dbName = process.env.DB_NAME || "Can't read dotenv db_name";
const client = new MongoClient(uri);
const db = client.db(dbName);

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
    const collection = db.collection(collectionName);

    try {
        const result = await collection.insertOne(document);
        return result;
    } catch (error) {
        console.error("Error inserting document:", error);
    }
}

async function findDocuments(collectionName, query) {
    const collection = db.collection(collectionName);

    try {
        const documents = await collection.find(query).toArray();
        return documents;
    } catch (error) {
        console.error("Error finding documents:", error);
    }
}

async function deleteAllDocuments(collectionName) {
    const collection = db.collection(collectionName);

    try {
        const result = await collection.deleteMany({});
        return result;
    } catch (error) {
        console.error("Error finding documents:", error);
    }
}

module.exports = {
    connect,
    close,
    insertDocument,
    findDocuments,
    deleteAllDocuments,
};
