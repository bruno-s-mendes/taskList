// const HTTP_UNPROCESSABLE_ENTITY = 422;
const HTTP_OK_STATUS = 200;
// const HTTP_CREATED_STATUS = 201;

const getTasks = (_req, res) => {
  res.status(HTTP_OK_STATUS).json('olar');
}

const addTask = (_req, res) => {
  res.status(HTTP_OK_STATUS).json('olar');
  console.log("isso ae");
}

module.exports = {
  getTasks,
  addTask,
}