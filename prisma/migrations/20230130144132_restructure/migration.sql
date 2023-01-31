/*
  Warnings:

  - A unique constraint covering the columns `[activityResourceId]` on the table `ExerciseHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExerciseHistory_activityResourceId_key" ON "ExerciseHistory"("activityResourceId");
