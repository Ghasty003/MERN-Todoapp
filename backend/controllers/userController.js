const User = require("../models/userModel");

const login = async (req, res) => {
  res.json({ message: "Login user" });
};

const signup = async (req, res) => {
  res.json({ message: "Signup user" });
};

module.exports = {
  login,
  signup,
};
