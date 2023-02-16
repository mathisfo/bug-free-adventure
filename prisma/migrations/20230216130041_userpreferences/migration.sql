-- CreateEnum
CREATE TYPE "SelectedEnum" AS ENUM ('HISTORYGRAPH', 'LEADERBOARD', 'EXERCISEHISTORY', 'TODO');

-- CreateTable
CREATE TABLE "UserPreference" (
    "userId" TEXT NOT NULL,
    "selectedComponents" "SelectedEnum"[] DEFAULT ARRAY[]::"SelectedEnum"[],
    "leaderboard" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "UserPreference"("userId");

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
