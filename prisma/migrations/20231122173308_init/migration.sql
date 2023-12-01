/*
  Warnings:

  - You are about to drop the `playlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "playlist";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "user" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Premium" BOOLEAN NOT NULL DEFAULT false,
    "Created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
