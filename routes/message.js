const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/message");

router.post("/create", messagesController.postCreateMessage);

router.put("/edit", messagesController.putEditMessage);

router.delete("/delete", messagesController.deleteMessage);

module.exports = router;
