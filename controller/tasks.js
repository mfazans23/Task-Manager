const Task = require('../model/task');

const getAllTasks = (req, res) => {
  res.send('Get All Task');
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
};
const getTask = (req, res) => {
  res.send('Get Single Task');
};
const updateTask = (req, res) => {
  res.send('Edit Task');
};
const deleteTask = (req, res) => {
  res.send('Delete Task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
