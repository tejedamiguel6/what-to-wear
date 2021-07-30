const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const miguel = await prisma.user.upsert({
    where: { email: 'miguel@example.com' },
    update: {},
    create: {
      email: 'miguel@example.com',
      name: 'Miguel',
      password: '123456',
      age: 27,
      outfits: {
        create: {
          top: 'yellow shirt',
          bottom: 'shorts',
          shoes: 'boots',
          published: true,
        },
      },
    },
  })

  const bob = await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      email: 'bob@example.com',
      name: 'Bob',
      password: '123456',
      age: 37,
      outfits: {
        create: {
          top: 'cool polo',
          bottom: 'sweatpants',
          shoes: 'sneakers',
          published: false,
        },
      },
    },
  })

  const michelle = await prisma.user.upsert({
    where: { email: 'michelle@aol.com' },
    update: {},
    create: {
      email: 'michelle@aol.com',
      name: 'Michelle',
      password: '123456',
      age: 24,
      outfits: {
        create: {
          top: 'some weird shirt',
          bottom: 'cool jeans',
          shoes: 'sneakers',
          published: false,
        },
      },
    },
  })
  console.log({ miguel, bob, michelle })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
