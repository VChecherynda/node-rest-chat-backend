import express from "express";
const router = express.Router();

import controllerAuth from "../controllersSOLID/auth";

router.post("/sign-in", controllerAuth.signIn);
router.post("/sign-up", controllerAuth.signUp);

export default router;
