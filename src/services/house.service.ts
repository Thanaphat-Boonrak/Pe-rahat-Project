import prisma from "../models/prisma";
class HouseService {
  async getAllHouse() {
    return prisma.houseInfo.findMany();
  }
}

export default new HouseService();
