const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

const messagesController = require("../controllers/message");

router.get("/list/:id", isAuth, messagesController.getMessages);

router.post("/create", isAuth, messagesController.postCreateMessage);

router.put("/update", isAuth, messagesController.putUpdateMessage);

router.delete("/delete", isAuth, messagesController.deleteMessage);

module.exports = router;
