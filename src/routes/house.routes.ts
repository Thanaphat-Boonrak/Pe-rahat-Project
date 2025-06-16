import { Router } from "express";
import houseController from "../controllers/house.controller";

const router = Router();

router.get("/getall", houseController.getAll);

export default router;
