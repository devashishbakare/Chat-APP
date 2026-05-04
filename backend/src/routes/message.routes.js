const router = require("express").Router();
const authenticate = require("../midddleware/auth.middleware");
const messageController = require("../controllers/message.controller");
router.post("/create", authenticate, messageController.createMessage);
router.get("/fetch/:chatId", authenticate, messageController.fetchMessage);
module.exports = router;
