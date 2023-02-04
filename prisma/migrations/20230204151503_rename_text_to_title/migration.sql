/*
  Warnings:

  - You are about to drop the column `text` on the `Accomplishment` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Blocker` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Plan` table. All the data in the column will be lost.
  - Added the required column `title` to the `Accomplishment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Blocker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accomplishment" DROP COLUMN "text",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Blocker" DROP COLUMN "text",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "text",
ADD COLUMN     "title" TEXT NOT NULL;
