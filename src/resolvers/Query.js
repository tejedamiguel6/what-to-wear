// so far this works, but i need to find a better way

const Query = {
  users: function (parent, args, { prisma }, info) {
    return prisma.user.findMany()
  },
  outfits: async function (parent, args, { prisma }, info) {
    // console.log(outfits, 'what is the parent')
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
    })
    return outfits
  },

  votes: async function (parent, args, { prisma }, info) {
    return prisma.vote.findMany()
  },
}

export default Query
