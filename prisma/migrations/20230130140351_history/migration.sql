/*
  Warnings:

  - You are about to drop the column `exerciseHistoryId` on the `ActivityResource` table. All the data in the column will be lost.
  - Added the required column `activityResourceId` to the `ExerciseHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ActivityResource" DROP CONSTRAINT "ActivityResource_exerciseHistoryId_fkey";

-- AlterTable
ALTER TABLE "ActivityResource" DROP COLUMN "exerciseHistoryId";

-- AlterTable
ALTER TABLE "ExerciseHistory" ADD COLUMN     "activityResourceId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ExerciseHistory" ADD CONSTRAINT "ExerciseHistory_activityResourceId_fkey" FOREIGN KEY ("activityResourceId") REFERENCES "ActivityResource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
