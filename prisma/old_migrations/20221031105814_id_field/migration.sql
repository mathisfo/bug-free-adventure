/*
  Warnings:

  - Added the required column `moduleId` to the `ActivityResource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ActivityResource" DROP CONSTRAINT "ActivityResource_id_fkey";

-- DropForeignKey
ALTER TABLE "Module" DROP CONSTRAINT "Module_id_fkey";

-- AlterTable
ALTER TABLE "ActivityResource" ADD COLUMN     "moduleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ActivityResource" ADD CONSTRAINT "ActivityResource_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
