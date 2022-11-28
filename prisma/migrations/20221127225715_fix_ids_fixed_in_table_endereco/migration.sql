-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
