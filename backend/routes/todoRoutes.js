const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", updateTodo);

module.exports = router;
