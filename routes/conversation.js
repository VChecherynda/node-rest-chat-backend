const express = require("express");
const router = express.Router();

const authController = require("../controllers/conversation");

router.get("/users", authController.getUsers);

module.exports = router;
