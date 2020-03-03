const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/message");

router.get("/list/:id", messagesController.getMessages);

router.post("/create", messagesController.postCreateMessage);

router.put("/update", messagesController.putUpdateMessage);

router.delete("/delete", messagesController.deleteMessage);

module.exports = router;
