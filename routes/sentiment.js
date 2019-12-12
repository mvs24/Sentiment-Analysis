const express = require("express");
const router = express.Router();

const sentimentController = require("../controllers/sentimentController");

router.route("/keywords").post(sentimentController.getKeywords);
router.route("/sentimentComments").post(sentimentController.sentimentComments);
router.route("/facialEmotionImage").post(sentimentController.facialEmotion);

module.exports = router;
