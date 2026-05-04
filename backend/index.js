const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const db = require("./src/config/mongoose");
db();
const indexRouter = require("./src/routes/index.routes");
app.use(express.json());
app.use("/api/", indexRouter);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("something wrong while listening to port");
  } else {
    console.log("listning on port", process.env.PORT);
  }
});

module.exports = app;
