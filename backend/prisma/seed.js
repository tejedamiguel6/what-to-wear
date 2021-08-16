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
          outfitImage:
            'https://wasabi-files.lbstatic.nu/files/looks/large/2021/08/10/5506030_image.jpg?1628574569',
          published: true,
        },
      },
      profile: {
        create: {
          bio: 'nerdy programmer dude that loves fashion',
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
          outfitImage:
            'https://wasabi-files.lbstatic.nu/files/looks/large/2021/08/16/5506673_IMG_20210629_112739_158.jpg?1629144552',
          published: false,
        },
      },
      profile: {
        create: {
          bio: 'listening to vinyls and posting OFD!',
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
          outfitImage:
            'https://wasabi-files.lbstatic.nu/files/looks/large/2021/08/16/5506668_inCollage_20210816_002739634.jpg?1629141963',
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
