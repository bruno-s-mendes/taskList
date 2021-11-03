const taskModel = require('../models/taskModel');

const getAll = async () => {
  const response = await taskModel.getAll();
  return response;
};

const addTask = async ({ description, deadLine }) => {
  const status = "Pendendte";
  const creationDate = new Date();
  const taskId = await taskModel.create({ description, creationDate, deadLine, status });
  return taskId;
};

const updateTask = async (id, { description, deadLine, status }) => {
  const data = await taskModel.update(id, { description, deadLine, status });
  return data;
}


module.exports = {
  getAll,
  addTask,
  updateTask,
};
