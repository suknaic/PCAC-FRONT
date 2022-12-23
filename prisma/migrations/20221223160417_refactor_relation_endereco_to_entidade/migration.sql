/*
  Warnings:

  - A unique constraint covering the columns `[entidadeId]` on the table `Endereco` will be added. If there are existing duplicate values, this will fail.
  - Made the column `entidadeId` on table `Endereco` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_entidadeId_fkey";

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "entidadeId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_entidadeId_key" ON "Endereco"("entidadeId");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_entidadeId_fkey" FOREIGN KEY ("entidadeId") REFERENCES "Entidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
