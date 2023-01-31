/*
  Warnings:

  - The primary key for the `ExerciseHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ExerciseHistory` table. All the data in the column will be lost.
  - The required column `historyId` was added to the `ExerciseHistory` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "ExerciseHistory" DROP CONSTRAINT "ExerciseHistory_pkey",
DROP COLUMN "id",
ADD COLUMN     "historyId" TEXT NOT NULL,
ADD CONSTRAINT "ExerciseHistory_pkey" PRIMARY KEY ("historyId");
