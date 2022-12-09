/*
  Warnings:

  - You are about to drop the column `descricao` on the `Mensagem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mensagem" DROP COLUMN "descricao",
ADD COLUMN     "arquivo" TEXT[],
ADD COLUMN     "texto" TEXT;

-- AlterTable
ALTER TABLE "Solicitacao" ADD COLUMN     "arquivo" TEXT[];
