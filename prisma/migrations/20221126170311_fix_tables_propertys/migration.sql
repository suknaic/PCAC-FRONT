/*
  Warnings:

  - You are about to drop the column `enderecoId` on the `Entidade` table. All the data in the column will be lost.
  - You are about to drop the column `superUserId` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `enderecoId` on the `Usuario` table. All the data in the column will be lost.
  - The `telefone` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `usuarioId` to the `Endereco` table without a default value. This is not possible if the table is not empty.
  - Made the column `solicitacaoId` on table `Mensagem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `senha` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Entidade" DROP CONSTRAINT "Entidade_enderecoId_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_solicitacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_enderecoId_fkey";

-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "entidadeId" TEXT,
ADD COLUMN     "usuarioId" TEXT NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL,
ALTER COLUMN "numero" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Entidade" DROP COLUMN "enderecoId",
ALTER COLUMN "telefone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Mensagem" DROP COLUMN "superUserId",
ALTER COLUMN "solicitacaoId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Solicitacao" ALTER COLUMN "descricao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "enderecoId",
DROP COLUMN "telefone",
ADD COLUMN     "telefone" INTEGER[],
ALTER COLUMN "senha" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefone_key" ON "Usuario"("telefone");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_entidadeId_fkey" FOREIGN KEY ("entidadeId") REFERENCES "Entidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_solicitacaoId_fkey" FOREIGN KEY ("solicitacaoId") REFERENCES "Solicitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
