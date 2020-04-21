import express from "express";
const router = express.Router();

import authController from "../controllers/auth";

router.post("/sign-in", authController.signIn);

router.post("/sign-up", authController.signUp);

module.exports = router;
