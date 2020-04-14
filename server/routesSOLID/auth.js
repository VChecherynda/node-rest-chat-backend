const express = require("express");
const router = express.Router();

const controllerAuth = require("../controllersSOLID/auth");

router.post("/sign-in", controllerAuth.postSignin);
router.post("/sign-up", controllerAuth.postSignup);

module.exports = router;
