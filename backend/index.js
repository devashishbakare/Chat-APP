const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const db = require("../backend/src/config/mongoose");
db();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("something wrong while listening to port");
  } else {
    console.log("listning on port", process.env.PORT);
  }
});

module.exports = app;
