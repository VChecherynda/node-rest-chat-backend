import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth";

import controllerRoom from "../controllers/room";

router.get("/list", isAuth, controllerRoom.list);
router.post("/create", isAuth, controllerRoom.create);

export default router;
