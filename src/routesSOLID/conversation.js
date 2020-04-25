import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth";

import controllerConversation from "../controllersSOLID/conversation";

router.get("/list", isAuth, controllerConversation.list);
router.post("/create", isAuth, controllerConversation.create);

export default router;
