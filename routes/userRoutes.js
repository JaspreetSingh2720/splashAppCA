const express = require("express");
const userController = require("../controllers/userController");
const authenticateToken = require("../middlewares/authentication");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/otpVerify", userController.otpVerify);
router.post("/signin", userController.login);
router.put(
  "/updateUser",
  authenticateToken,
  userController.updateUser
);
router.post("/userAnswer", authenticateToken, userController.userAnswer)


module.exports = router;
