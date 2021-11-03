const taskService = require('../services/taskService');

// const HTTP_UNPROCESSABLE_ENTITY = 422;
const HTTP_OK_STATUS = 200;
// const HTTP_CREATED_STATUS = 201;

const getTasks = (_req, res) => {
  const taskList = taskService.getAll();
  res.status(HTTP_OK_STATUS).json(taskList);
}

const addTask = (_req, res) => {
  res.status(HTTP_OK_STATUS).json('olar');
}

module.exports = {
  getTasks,
  addTask,
}