import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const usuario = await prisma.usuario.upsert({
    where: { email: 'usuario@usuario.com' },
    update: {},
    create: {
      email: 'usuario@usuario.com',
      nome: 'felipe suknaic',
      cpf: '12345678911',
      telefone: '68981006523',
      senha: 'usuario',
      password: await hash('usuario', 8),
      Entidade: {
        create: {
          nome: 'escola perto de casa',
          tipo: 'escola',
          detalhe: 'perto de casa toda verde',
        },
      },
    },
  });

  const admin = await prisma.usuario.upsert({
    where: { email: 'usuario2@usuario2.com' },
    update: {},
    create: {
      email: 'usuario2@usuario2.com',
      nome: 'diego suknaic',
      cpf: '12345678922',
      telefone: '68981006523',
      senha: 'usuario2',
      password: await hash('usuario2', 8),
      isAdmin: true,
    },
  });

  console.log({ admin, usuario });
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
