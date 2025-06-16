-- CreateTable
CREATE TABLE `User_Info` (
    `user_id` VARCHAR(10) NOT NULL,
    `student_id` CHAR(11) NOT NULL,
    `house_id` INTEGER NULL,
    `matched_user` VARCHAR(10) NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `House_Info` (
    `house_id` INTEGER NOT NULL AUTO_INCREMENT,
    `house_name` VARCHAR(50) NOT NULL,
    `color` VARCHAR(25) NOT NULL,

    PRIMARY KEY (`house_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hint_PE` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hint` CHAR(100) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Info` ADD CONSTRAINT `User_Info_house_id_fkey` FOREIGN KEY (`house_id`) REFERENCES `House_Info`(`house_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hint_PE` ADD CONSTRAINT `Hint_PE_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User_Info`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
