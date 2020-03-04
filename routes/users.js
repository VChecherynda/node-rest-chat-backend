const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

const usersController = require("../controllers/users");

router.get("/list", isAuth, usersController.getUsers);

module.exports = router;
