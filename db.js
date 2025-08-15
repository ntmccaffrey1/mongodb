const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connect() {
  if (db) return db;

  try {
    await client.connect();
    db = client.db("sample_mflix");
    console.log('Connected to MongoDB');
    return db;
  } catch (err) {
    console.error('Connection failed:', err);
  }
}

module.exports = connect;