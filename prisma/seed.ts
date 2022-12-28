import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const usuario = await prisma.usuario.upsert({
    where: { email: 'usuario@usuario.com' },
    update: {},
    create: {
      image: '5c0dc865b11414f04c406de760a91fea-cachorro.jpg',
      email: 'usuario@usuario.com',
      nome: 'felipe suknaic',
      cpf: '12345678911',
      telefone: '68981006523',
      senha: 'usuario',
      password: await hash('usuario', 8),
      Entidade: {
        create: {
          nome: 'CASA DE ACOLHIMENTO DE ANIMAIS',
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
      image: '246a077059539eecffda5e6253eaeb83-avatar.jpg',
      email: 'admin@admin.com',
      nome: 'Diego suknaic',
      cpf: '12345678922',
      telefone: '68981006523',
      senha: 'usuario',
      password: await hash('usuario', 8),
      isAdmin: true,
    },
  });

  const atendente = await prisma.usuario.upsert({
    where: { email: 'usuario2@usuario2.com' },
    update: {},
    create: {
      image: '246a077059539eecffda5e6253eaeb83-avatar.jpg',
      email: 'admin@admin.com',
      nome: 'Diego suknaic',
      cpf: '12345678922',
      telefone: '68981006523',
      senha: 'usuario',
      password: await hash('usuario', 8),
      isAdmin: false,
      isAttend: true,
    },
  });

  console.log({ admin, usuario, atendente });
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
