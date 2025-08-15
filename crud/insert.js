const connectDB = require('../db');

async function insertUser(userData) {
  const db = await connectDB();
  const result = await db.collection('users').insertOne(userData);
  return result;
}

module.exports = {
  insertUser
};