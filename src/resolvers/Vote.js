const Vote = {
  author(parent, args, { prisma }, info) {
    console.log(parent.userId, 'what is the info')
    return prisma.vote.findUnique({ where: { id: parent.userId } })
  },

  outfits(parent, args, { prisma }, info) {
    return prisma.outfit.findUnique({ where: { id: parent.id } })
  },
}

export default Vote
