import { Request, Response } from "express";
import userService from "../services/user.service";
import { UserDto } from "../DTO/user";
import { message } from "../DTO/message";
class UserController {
  async create(req: Request, res: Response) {
    try {
      const userDto: UserDto = {
        student_id: req.body.student_id,
      };

      const result: message = await userService.CreateUser(userDto);

      if (result.status) {
        res.status(201).json({ status: result.message });
      } else {
        res.status(400).json({ error: result.message });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async ExistedUser(req: Request, res: Response) {
    try {
      const userDto: UserDto = {
        student_id: req.params.userId,
      };

      const checked: message = await userService.ExistUser(userDto.student_id);
      console.log(checked.status);
      if (checked.status) {
        res.status(201).json({ status: checked.status });
      } else {
        res.status(400).json({ status: checked.status });
      }

      res.json({ status: checked });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
