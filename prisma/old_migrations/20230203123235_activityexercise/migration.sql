/*
  Warnings:

  - The primary key for the `ActivityResource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ActivityResource` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExerciseHistory" DROP CONSTRAINT "ExerciseHistory_userId_fkey";

-- DropIndex
DROP INDEX "ActivityResource_activityId_key";

-- AlterTable
ALTER TABLE "ActivityResource" DROP CONSTRAINT "ActivityResource_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ActivityResource_pkey" PRIMARY KEY ("activityId");

-- AddForeignKey
ALTER TABLE "ExerciseHistory" ADD CONSTRAINT "ExerciseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
