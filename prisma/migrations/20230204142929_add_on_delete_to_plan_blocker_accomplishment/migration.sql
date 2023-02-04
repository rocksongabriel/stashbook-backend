-- DropForeignKey
ALTER TABLE "Accomplishment" DROP CONSTRAINT "Accomplishment_standupId_fkey";

-- DropForeignKey
ALTER TABLE "Blocker" DROP CONSTRAINT "Blocker_standupId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_standupId_fkey";

-- AlterTable
ALTER TABLE "Accomplishment" ALTER COLUMN "standupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Accomplishment" ADD CONSTRAINT "Accomplishment_standupId_fkey" FOREIGN KEY ("standupId") REFERENCES "Standup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blocker" ADD CONSTRAINT "Blocker_standupId_fkey" FOREIGN KEY ("standupId") REFERENCES "Standup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_standupId_fkey" FOREIGN KEY ("standupId") REFERENCES "Standup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
