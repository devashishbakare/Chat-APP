const router = require("express").Router();
const chatController = require("../controllers/chat.controller");
const authenticate = require("../midddleware/auth.middleware");
router.post("/create", authenticate, chatController.createChat);
router.get("/fetch", authenticate, chatController.fetchChat);
module.exports = router;
