const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

router.post("/sign-up", authController.postSignup);

router.post("/sign-in", authController.postSignin);

module.exports = router;
