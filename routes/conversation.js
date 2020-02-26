const express = require("express");
const router = express.Router();

const conversationController = require("../controllers/conversation");

router.get("/users", conversationController.getUsers);

router.get("/create", conversationController.postCreateConversation);

module.exports = router;
