/*
  Warnings:

  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_standupId_fkey";

-- DropTable
DROP TABLE "Plan";

-- CreateTable
CREATE TABLE "PlanToday" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "standupId" TEXT,

    CONSTRAINT "PlanToday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanTomorrow" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "standupId" TEXT,

    CONSTRAINT "PlanTomorrow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlanToday" ADD CONSTRAINT "PlanToday_standupId_fkey" FOREIGN KEY ("standupId") REFERENCES "Standup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanTomorrow" ADD CONSTRAINT "PlanTomorrow_standupId_fkey" FOREIGN KEY ("standupId") REFERENCES "Standup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
