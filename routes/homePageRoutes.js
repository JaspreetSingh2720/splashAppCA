const express = require("express");
const HomePageController = require("../controllers/homePageController")
const authenticateToken = require("../middlewares/authentication")
const router = express.Router();

router.get("/homepage", authenticateToken, HomePageController.getHomePageData)

module.exports = router;