-- DropForeignKey
ALTER TABLE "ExerciseHistory" DROP CONSTRAINT "ExerciseHistory_id_fkey";

-- AlterTable
ALTER TABLE "ActivityResource" ADD COLUMN     "exerciseHistoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "ActivityResource" ADD CONSTRAINT "ActivityResource_exerciseHistoryId_fkey" FOREIGN KEY ("exerciseHistoryId") REFERENCES "ExerciseHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
