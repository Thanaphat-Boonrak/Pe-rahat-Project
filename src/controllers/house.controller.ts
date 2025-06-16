import houseService from "../services/house.service";
import { Request, Response } from "express";

class HouseController {
  async getAll(req: Request, res: Response) {
    try {
      const house = await houseService.getAllHouse();
      res.json(house);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new HouseController();
