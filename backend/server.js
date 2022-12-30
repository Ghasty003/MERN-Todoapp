require("dotenv").config();
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);

  next();
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
