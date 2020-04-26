import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth";

import controllerUser from "../controllersSOLID/user";

router.get("/list", isAuth, controllerUser.list);

export default router;
