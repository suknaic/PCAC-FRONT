/*
  Warnings:

  - You are about to drop the column `finalizada` on the `Solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Solicitacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Solicitacao" DROP COLUMN "finalizada",
DROP COLUMN "status",
ADD COLUMN     "respondida" BOOLEAN NOT NULL DEFAULT false;
