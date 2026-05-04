const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../midddleware/auth.middleware");

router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);
router.post("/signOut", authMiddleware, userController.signOut);
module.exports = router;
