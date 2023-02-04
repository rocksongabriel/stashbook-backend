/*
  Warnings:

  - You are about to drop the column `created` on the `Standup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Standup" DROP COLUMN "created",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
