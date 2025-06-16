import { Router } from "express";
import userController from "../controllers/user.controller";
const router = Router();

router.post("/auth", userController.create);
router.get("/checked/:userId", userController.ExistedUser)

export default router;
