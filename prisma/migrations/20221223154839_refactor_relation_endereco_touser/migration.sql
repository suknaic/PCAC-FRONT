/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Endereco` will be added. If there are existing duplicate values, this will fail.
  - Made the column `usuarioId` on table `Endereco` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "usuarioId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_usuarioId_key" ON "Endereco"("usuarioId");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
