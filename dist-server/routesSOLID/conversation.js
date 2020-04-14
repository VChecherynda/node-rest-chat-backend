"use strict";

var express = require("express");

var router = express.Router();

var isAuth = require("../middleware/is-auth");

var controllerConversations = require("../controllersSOLID/conversation");

router.get("/list", isAuth, controllerConversations.list);
router.post("/create", isAuth, controllerConversations.create);
module.exports = router;