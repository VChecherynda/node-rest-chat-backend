import express from "express";
const router = express.Router();
import isAuth from "../middleware/is-auth";

import controllerMessage from "../controllers/message";

router.get("/list/:id", isAuth, controllerMessage.list);
router.post("/create", isAuth, controllerMessage.create);
router.put("/update", isAuth, controllerMessage.update);
router.delete("/delete", isAuth, controllerMessage.delete);

export default router;
