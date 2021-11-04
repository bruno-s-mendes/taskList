const taskModel = require('../models/taskModel');

const getAll = async () => {
  const response = await taskModel.getAll();
  return response;
};

const addTask = async ({ description, deadLine }) => {
  const status = "Pendendte";
  const nowDate = new Date();
  const creationDate = nowDate.toLocaleDateString();
  const taskId = await taskModel.create({ description, creationDate, deadLine, status });
  return taskId;
};

const updateTask = async (id, { description, deadLine, status }) => {
  const data = await taskModel.update(id, { description, deadLine, status });
  return data;
}

const deleteTask = async (id) => {
  const data = await taskModel.deleteById(id);
  return data;
}

const getTaskStatus = () => {
  return ["Pendente", "Em andamento", "Pronto"];
};


module.exports = {
  getAll,
  addTask,
  updateTask,
  deleteTask,
  getTaskStatus,
};
