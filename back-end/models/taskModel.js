const connection = require('./connection');

const COLLECTION = 'tasks';

const getAll = async () => {
  const collection = await connection()
  .then((db) => db.collection(COLLECTION));

  const response = await collection.find().toArray();

  return response;
};

module.exports = {
  getAll,
};