const connection = require('./connection');

const COLLECTION = 'tasks';

const getAll = async () => {
  const collection = await connection()
  .then((db) => db.collection(COLLECTION));

  const response = await collection.find().toArray();

  return response;
};


const create = async ({ description, creationDate, deadLine, status }) => {
  const collection = await connection()
    .then((db) => db.collection(COLLECTION));

  const { insertedId: id } = await collection
    .insertOne({ description, creationDate, deadLine, status });

  return {
    id,
  };
};

module.exports = {
  getAll,
  create,
};