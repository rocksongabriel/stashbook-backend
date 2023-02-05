/*
  Warnings:

  - Made the column `standupId` on table `Accomplishment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `standupId` on table `PlanToday` required. This step will fail if there are existing NULL values in that column.
  - Made the column `standupId` on table `PlanTomorrow` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Accomplishment" ALTER COLUMN "standupId" SET NOT NULL;

-- AlterTable
ALTER TABLE "PlanToday" ALTER COLUMN "standupId" SET NOT NULL;

-- AlterTable
ALTER TABLE "PlanTomorrow" ALTER COLUMN "standupId" SET NOT NULL;
