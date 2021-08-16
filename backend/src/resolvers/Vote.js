const Vote = {
  author(parent, args, { prisma }, info) {
    console.log(parent, 'what is the info')
    return prisma.vote.findUnique({ where: { id: parent.id } }).author()
  },

  outfits(parent, args, { prisma }, info) {
    return prisma.outfit.findUnique({ where: { id: parent.id } })
  },
}

export default Vote
