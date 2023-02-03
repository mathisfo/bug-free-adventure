-- DropForeignKey
ALTER TABLE "ExerciseHistory" DROP CONSTRAINT "ExerciseHistory_activityResourceId_fkey";

-- AddForeignKey
ALTER TABLE "ExerciseHistory" ADD CONSTRAINT "ExerciseHistory_activityResourceId_fkey" FOREIGN KEY ("activityResourceId") REFERENCES "ActivityResource"("activityId") ON DELETE RESTRICT ON UPDATE CASCADE;
