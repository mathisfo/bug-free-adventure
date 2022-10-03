/*
  Warnings:

  - Added the required column `userId` to the `LoginToken` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LoginToken" (
    "id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "redirect" TEXT NOT NULL DEFAULT '/',
    CONSTRAINT "LoginToken_id_fkey" FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LoginToken" ("createdAt", "id", "redirect") SELECT "createdAt", "id", "redirect" FROM "LoginToken";
DROP TABLE "LoginToken";
ALTER TABLE "new_LoginToken" RENAME TO "LoginToken";
CREATE UNIQUE INDEX "LoginToken_id_key" ON "LoginToken"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
