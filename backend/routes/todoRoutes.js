const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  getTodo,
} = require("../controllers/todoController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello. Done!" });
});

router.use(requireAuth);

router.get("/", getTodos);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", updateTodo);

module.exports = router;
