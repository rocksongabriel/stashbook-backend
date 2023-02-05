/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Accomplishment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Blocker` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `PlanToday` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `PlanTomorrow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Accomplishment_title_key" ON "Accomplishment"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Blocker_title_key" ON "Blocker"("title");

-- CreateIndex
CREATE UNIQUE INDEX "PlanToday_title_key" ON "PlanToday"("title");

-- CreateIndex
CREATE UNIQUE INDEX "PlanTomorrow_title_key" ON "PlanTomorrow"("title");
