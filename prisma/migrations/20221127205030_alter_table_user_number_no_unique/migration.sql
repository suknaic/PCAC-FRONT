-- DropIndex
DROP INDEX "Usuario_telefone_key";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "telefone" SET NOT NULL,
ALTER COLUMN "telefone" SET DATA TYPE TEXT;
