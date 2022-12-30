const express = require("express");
const { getTodos, createTodo } = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);

router.post("/", createTodo);

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete request" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "Patch request" });
});

module.exports = router;
