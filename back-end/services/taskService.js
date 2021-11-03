const taskModel = require('../models/taskModel');

const getAll = async () => {
  const response = await taskModel.getAll();
  return response;
};


module.exports = {
  getAll,
};
