/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Entidade` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_entidadeId_fkey";

-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "entidadeId" DROP NOT NULL,
ALTER COLUMN "usuarioId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Entidade_usuarioId_key" ON "Entidade"("usuarioId");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_entidadeId_fkey" FOREIGN KEY ("entidadeId") REFERENCES "Entidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
