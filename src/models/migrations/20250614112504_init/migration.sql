/*
  Warnings:

  - A unique constraint covering the columns `[student_id]` on the table `User_Info` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_Info_student_id_key` ON `User_Info`(`student_id`);
