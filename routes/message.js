const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/message");

router.get("/create", messagesController.postCreateMessage);

router.get("/edit", messagesController.putEditMessage);

router.get("/delete", messagesController.deleteMessage);

module.exports = router;
