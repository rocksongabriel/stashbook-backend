/*
  Warnings:

  - Added the required column `text` to the `Blocker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blocker" ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "text" TEXT NOT NULL;
