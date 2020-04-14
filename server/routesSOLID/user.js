const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

const controllerUser = require("../controllersSOLID/user");

router.get("/list", isAuth, controllerUser.list);

module.exports = router;
