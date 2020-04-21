const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

const conversationsController = require("../controllers/conversation");

router.get("/list", isAuth, conversationsController.getConversationsList);

router.post("/create", isAuth, conversationsController.postConversationsCreate);

module.exports = router;
