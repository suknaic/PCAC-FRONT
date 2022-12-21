/*
  Warnings:

  - You are about to drop the column `arquivo` on the `Mensagem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mensagem" DROP COLUMN "arquivo",
ADD COLUMN     "arquivos" TEXT[];
