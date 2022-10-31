/*
  Warnings:

  - You are about to drop the column `order` on the `Course` table. All the data in the column will be lost.
  - Added the required column `order` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "order";

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "order" INTEGER NOT NULL;
