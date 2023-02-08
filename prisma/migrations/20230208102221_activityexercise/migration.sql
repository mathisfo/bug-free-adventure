/*
  Warnings:

  - The primary key for the `ActivityResource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `activityId` on the `ActivityResource` table. All the data in the column will be lost.
  - The required column `id` was added to the `ActivityResource` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "ExerciseHistory" DROP CONSTRAINT "ExerciseHistory_activityResourceId_fkey";

-- AlterTable
ALTER TABLE "ActivityResource" DROP CONSTRAINT "ActivityResource_pkey",
DROP COLUMN "activityId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ActivityResource_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "ExerciseHistory" ADD CONSTRAINT "ExerciseHistory_activityResourceId_fkey" FOREIGN KEY ("activityResourceId") REFERENCES "ActivityResource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
