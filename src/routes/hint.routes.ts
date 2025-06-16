import { Router } from "express";
import hintcontroller from "../controllers/hintcontroller";

const router = Router();

router.post("/addHint", hintcontroller.getHintByUserId);
router.get("/getbyStudent", hintcontroller.getHintByStudentId);

export default router;
