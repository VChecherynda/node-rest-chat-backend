"use strict";

var express = require("express");

var router = express.Router();

var controllerAuth = require("../controllersSOLID/auth");

router.post("/sign-in", controllerAuth.postSignin);
router.post("/sign-up", controllerAuth.postSignup);
module.exports = router;