const express = require("express");
const UploadImageController = require("../controllers/uploadImageController")
const router = express.Router();
const upload = require("../middlewares/multer");
const authenticateToken = require("../middlewares/authentication");

router.put("/uploadDocument", authenticateToken, upload.any(), UploadImageController.uploadDocument);
router.put("/uploadPhotos", authenticateToken, upload.any(), UploadImageController.uploadPhotos);

module.exports = router;