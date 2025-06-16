import { error } from "console";
import { HintDto } from "../DTO/hint";
import hintService from "../services/hint.service";
import { Request, Response } from "express";
import { UserDto } from "../DTO/user";

class HintController {
  async getHintByUserId(req: Request, res: Response) {
    try {
      const data: HintDto = {
        Hint: req.body.Hint,
        student_id: req.body.student_id,
      };

      const save = await hintService.createHint(data);
      if (save.status == false) {
        res.status(404).json({ error: save.message });
      }
      res.status(200).json({ hints: save.message });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getHintByStudentId(req: Request, res: Response) {
    try {
      const dataUser: UserDto = {
        student_id: req.body.student_id,
      };

      const data = await hintService.getHintByStudentId(dataUser);
      res.status(200).json(data);
      // if (save.status == false) {
      //   res.status(404).json({ error: save.message });
      // }
      // res.status(200).json({ hints: save.message });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new HintController();
