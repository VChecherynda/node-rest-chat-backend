const express = require("express");
const router = express.Router();

const conversationsController = require("../controllers/conversation");

router.post("/create", conversationsController.postCreateConversation);

module.exports = router;
