const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get request" });
});

router.post("/", (req, res) => {
  res.json({ message: "Post request" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete request" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "Patch request" });
});

module.exports = router;
