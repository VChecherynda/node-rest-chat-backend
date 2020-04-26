import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth";

import controllerUser from "../controllers/user";

router.get("/list", isAuth, controllerUser.list);

export default router;
