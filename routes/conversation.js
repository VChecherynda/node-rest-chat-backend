const express = require("express");
const router = express.Router();

const conversationsController = require("../controllers/conversation");

router.get("/list", conversationsController.getConversationsList);

router.get("/list/:id", conversationsController.getConversation);

router.post("/create", conversationsController.postConversationsCreate);

module.exports = router;
