const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },

    uid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todos", todoSchema);
