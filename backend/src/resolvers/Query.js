const Query = {
  users: function (parent, args, { prisma }, info) {
    return prisma.user.findMany()
  },
  outfits: async function (parent, args, { prisma }, info) {
    return prisma.outfit.findMany()
  },

  feed: async function (parent, args, { prisma }, info) {
    const where = args.filter
      ? {
          OR: [
            { top: { contains: args.filter } },
            { bottom: { contains: args.filter } },
            { shoes: { contains: args.filter } },
          ],
        }
      : {}
    const outfits = await prisma.outfit.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })

    return outfits
  },

  votes: async function (parent, args, { prisma }, info) {
    return prisma.vote.findMany()
  },

  profiles: function (parent, args, { prisma }, info) {
    console.log('this is from the query file', parent)
    return prisma.profile.findMany()
  },
}

export default Query
