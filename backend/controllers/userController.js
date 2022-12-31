const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    const userName = user.userName;

    res.status(200).json({ userName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const Signup = async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const user = await User.signup(email, password, userName);
    const token = createToken(user._id);

    res.status(200).json({ userName, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  Login,
  Signup,
};
