const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

const controllerMessage = require("../controllersSOLID/message");

router.get("/list/:id", isAuth, controllerMessage.list);
router.post("/create", isAuth, controllerMessage.create);
router.put("/update", isAuth, controllerMessage.update);
router.delete("/delete", isAuth, controllerMessage.delete);

module.exports = router;
