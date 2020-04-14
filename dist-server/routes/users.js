"use strict";

var express = require("express");

var router = express.Router();

var isAuth = require("../middleware/is-auth");

var usersController = require("../controllers/users");

router.get("/list", isAuth, usersController.getUsers);
module.exports = router;