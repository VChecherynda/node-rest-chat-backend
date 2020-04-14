"use strict";

var express = require("express");

var router = express.Router();

var isAuth = require("../middleware/is-auth");

var messagesController = require("../controllers/message");

router.get("/list/:id", isAuth, messagesController.getMessages);
router.post("/create", isAuth, messagesController.postCreateMessage);
router.put("/update", isAuth, messagesController.putUpdateMessage);
router["delete"]("/delete", isAuth, messagesController.deleteMessage);
module.exports = router;