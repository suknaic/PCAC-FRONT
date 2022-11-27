import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      nome: 'admin',
      cpf: '12345678900',
      telefone: '68992581641',
      senha: await hash('admin', 8),
      isAdmin: true,
    },
  });
  const usuario = await prisma.usuario.upsert({
    where: { email: 'usuario@usuario.com' },
    update: {},
    create: {
      email: 'usuario@usuario.com',
      nome: 'felipe suknaic',
      cpf: '12345678911',
      telefone: '68981006523',
      senha: await hash('usuario', 8),
    },
  });

  const entidade = await prisma.entidade.create({
    data: {
      nome: 'escola perto de casa',
      tipo: 'escola',
      detalhe: 'perto de casa toda verde',
      usuarioId: usuario.id,
    },
  });

  console.log({ admin, usuario, entidade });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
