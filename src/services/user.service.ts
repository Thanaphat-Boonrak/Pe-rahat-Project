import { UserDto } from "../DTO/user";
import { nanoid } from "nanoid";
import prisma from "../models/prisma";
import { message } from "../DTO/message";
class UserService {
  async CreateUser(userDto: UserDto) {
    const response: message = {
      message: "Success",
      status: true,
    };

    if (!userDto.student_id) {
      response.message = "StudentId null or Empty";
      response.status = false;
      return response;
    }

    const user_id = userDto.student_id.substring(0, 2) + nanoid(4);

    try {
      if (userDto.student_id.startsWith("67")) {
        await prisma.userInfo.create({
          data: {
            user_id: user_id,
            student_id: userDto.student_id,
          },
        });
      } else if (userDto.student_id.startsWith("68")) {
        const matchUser = await prisma.userInfo.findFirst({
          where: {
            matched_user: null,
          },
        });

        if (!matchUser) {
          response.message = "No available matched user";
          response.status = false;
          return response;
        }

        const house = await prisma.houseInfo.findFirst({
          where: { house_name: userDto.house },
        });

        await prisma.userInfo.create({
          data: {
            user_id: user_id,
            student_id: userDto.student_id,
            house: {
              connect: {
                house_id: house!.house_id,
              },
            },
            matched_user: matchUser.user_id,
          },
        });

        await prisma.userInfo.update({
          where: { user_id: matchUser.user_id },
          data: {
            matched_user: user_id,
          },
        });
      }
    } catch (error) {
      response.message = "Failed to create user: " + error;
      response.status = false;
      return response;
    }

    return response;
  }

  async ExistUser(user_id: string) {
    const response: message = {
      message: "Success",
      status: true,
    };

    const user = await prisma.userInfo.findUnique({
      where: {
        student_id: user_id,
      },
    });

    if (user == null || user_id == "") {
      response.message = "StudentId null or Empty";
      response.status = false;
      return response;
    }

    return response;
  }
}

export default new UserService();
