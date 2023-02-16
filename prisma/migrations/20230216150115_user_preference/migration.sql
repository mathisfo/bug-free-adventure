/*
  Warnings:

  - The primary key for the `UserPreference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `UserPreference` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "UserPreference_userId_key";

-- AlterTable
ALTER TABLE "UserPreference" DROP CONSTRAINT "UserPreference_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id");
