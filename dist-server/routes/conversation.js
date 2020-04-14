"use strict";

var express = require("express");

var router = express.Router();

var isAuth = require("../middleware/is-auth");

var conversationsController = require("../controllers/conversation");

router.get("/list", isAuth, conversationsController.getConversationsList);
router.post("/create", isAuth, conversationsController.postConversationsCreate);
module.exports = router;