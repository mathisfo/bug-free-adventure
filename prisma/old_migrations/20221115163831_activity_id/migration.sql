/*
  Warnings:

  - A unique constraint covering the columns `[activityId]` on the table `ActivityResource` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `activityId` to the `ActivityResource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActivityResource" ADD COLUMN     "activityId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ActivityResource_activityId_key" ON "ActivityResource"("activityId");
