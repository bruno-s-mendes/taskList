const { ObjectId } = require('bson');
const { connection } = require('./connection');

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

const update = async (id, { description, deadLine, status }) => {
  const collection = await connection()
  .then((db) => db.collection(COLLECTION));

  const response = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { description, deadLine, status } },
  );

  return response.result.ok;
};

const deleteById = async (id) => {
  const collection = await connection()
  .then((db) => db.collection(COLLECTION));

  const response = await collection.deleteOne({ _id: new ObjectId(id) });

  return response;
};

module.exports = {
  getAll,
  create,
  update,
  deleteById,
};