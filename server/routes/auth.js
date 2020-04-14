import express from "express";
const router = express.Router();

import authController from "../controllers/auth";

router.post("/sign-in", authController.postSignin);

router.post("/sign-up", authController.postSignup);

module.exports = router;
