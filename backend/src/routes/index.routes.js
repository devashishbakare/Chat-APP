const router = require("express").Router();
const userRouter = require("./user.routes");
const messageRouter = require("./message.routes");
const chatRouter = require("./chat.routes");
router.use("/user", userRouter);
router.use("/message", messageRouter);
router.use("/chat", chatRouter);
module.exports = router;
