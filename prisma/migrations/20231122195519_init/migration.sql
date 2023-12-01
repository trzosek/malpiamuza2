/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_Email_UserID_key";

-- CreateIndex
CREATE UNIQUE INDEX "user_Email_key" ON "user"("Email");