const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

const controllerConversations = require("../controllersSOLID/conversation");

router.get("/list", isAuth, controllerConversations.list);
router.post("/create", isAuth, controllerConversations.create);

module.exports = router;
