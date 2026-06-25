const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const db = require("./src/config/mongoose");
db();
const indexRouter = require("./src/routes/index.routes");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/", indexRouter);

io.on("connection", (socket) => {
  console.log("socket connected:", socket.id);

  socket.on("message", (data) => {
    console.log("message received:", data);
    socket.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 8002;

server.listen(PORT, (err) => {
  if (err) {
    console.log("something wrong while listening to port");
  } else {
    console.log("listening on port", PORT);
  }
});
module.exports = app;
