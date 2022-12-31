const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password, userName) {
  if (!email || !password || !userName) {
    throw new Error("All field must be filled");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, userName });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All field must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Invalid Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid password");
  }

  return user;
};

module.exports = mongoose.model("Users", userSchema);
