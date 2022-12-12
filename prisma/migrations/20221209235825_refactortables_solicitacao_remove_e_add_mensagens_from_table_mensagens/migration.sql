/*
  Warnings:

  - You are about to drop the column `arquivo` on the `Solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `audio` on the `Solicitacao` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Solicitacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Solicitacao" DROP COLUMN "arquivo",
DROP COLUMN "audio",
DROP COLUMN "descricao";
