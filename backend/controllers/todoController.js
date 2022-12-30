const Todos = require("../models/todoModel");

const getTodos = async (req, res) => {
  try {
    const todos = await Todos.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: "error.message" });
  }
};

const createTodo = async (req, res) => {
  const { todo } = req.body;

  try {
    const todos = await Todos.create({
      todo,
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
};
