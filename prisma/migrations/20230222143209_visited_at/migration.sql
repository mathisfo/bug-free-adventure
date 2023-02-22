/*
  Warnings:

  - A unique constraint covering the columns `[userId,activityResourceId]` on the table `ExerciseHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ExerciseHistory" ALTER COLUMN "completedAt" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseHistory_userId_activityResourceId_key" ON "ExerciseHistory"("userId", "activityResourceId");
