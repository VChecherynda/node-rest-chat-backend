"use strict";

var express = require("express");

var router = express.Router();

var isAuth = require("../middleware/is-auth");

var controllerMessage = require("../controllersSOLID/message");

router.get("/list/:id", isAuth, controllerMessage.list);
router.post("/create", isAuth, controllerMessage.create);
router.put("/update", isAuth, controllerMessage.update);
router["delete"]("/delete", isAuth, controllerMessage["delete"]);
module.exports = router;