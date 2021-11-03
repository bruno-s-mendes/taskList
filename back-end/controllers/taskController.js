const taskService = require('../services/taskService');

const HTTP_ERROR_STATUS = 400;
const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;

const getTasks = async (_req, res) => {
  try {
    const taskList = await taskService.getAll();
    res.status(HTTP_OK_STATUS).json(taskList);
  } catch (error) {
    res.status(HTTP_ERROR_STATUS).json(error);
  }
}

const setTask = async (req, res) => {
  try {
    const { description, deadLine } = req.body;
    await taskService.addTask({ description, deadLine });
    res.status(HTTP_CREATED_STATUS).end();
  } catch (error) {
    res.status(HTTP_ERROR_STATUS).json(error);
  }
}

const updateTask = async (req, res) => {
  try {
    const { description, deadLine, status } = req.body;
    const { id } = req.params;
    await taskService.updateTask(id, { description, deadLine, status });
    res.status(HTTP_OK_STATUS).end();
  } catch (error) {
    res.status(HTTP_ERROR_STATUS).json(error);
  }
}

module.exports = {
  getTasks,
  setTask,
  updateTask,
}