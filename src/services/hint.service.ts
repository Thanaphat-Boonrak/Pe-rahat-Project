import { HintDto } from "../DTO/hint";
import { message } from "../DTO/message";
import { UserDto } from "../DTO/user";
import prisma from "../models/prisma";
class HintService {
  async createHint(hint: HintDto) {
    const user = await prisma.userInfo.findUnique({
      where: {
        student_id: hint.student_id,
      },
    });
    const response: message = {
      message: "Success",
      status: true,
    };

    if (!user || hint.Hint == null || hint.Hint == "" || !user.user_id.startsWith("67")) {
      response.message = "User Not Found || Hint Null || Only 67 can add Hint";
      response.status = false;
      return response;
    }

    const createdHint = await prisma.hint.create({
      data: {
        hint: hint.Hint,
        user_id: user.user_id,
      },
    });

    return response;
  }

  async getHintByStudentId(userDto: UserDto) {
    const response: message = {
      message: "Success",
      status: true,
    };
    const user = await prisma.userInfo.findUnique({
      where: {
        student_id: userDto.student_id,
      },
    });

    if (user?.matched_user == null) {
      response.message = "User Not Found or Hint Null";
      response.status = false;
      return response;
    }

    const hint = await prisma.hint.findMany({
      where: { user_id: user.matched_user },
    });

    return hint;
  }
}

export default new HintService();
