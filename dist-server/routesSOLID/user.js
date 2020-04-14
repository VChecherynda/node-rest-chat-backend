"use strict";

var express = require("express");

var router = express.Router();

var isAuth = require("../middleware/is-auth");

var controllerUser = require("../controllersSOLID/user");

router.get("/list", isAuth, controllerUser.list);
module.exports = router;