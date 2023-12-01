-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "UserID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Premium" BOOLEAN NOT NULL DEFAULT false,
    "Role" TEXT NOT NULL DEFAULT 'USER',
    "Created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_user" ("Created_At", "Email", "Name", "Password", "Premium", "UserID") SELECT "Created_At", "Email", "Name", "Password", "Premium", "UserID" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_Email_key" ON "user"("Email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
