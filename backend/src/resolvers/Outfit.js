const Outfit = {
  author(parent, args, { prisma }, info) {
    // it is outfit/singular
    return prisma.outfit.findUnique({ where: { id: parent.id } }).author()
  },

  votes(parent, args, { prisma }, info) {
    return prisma.vote.findUnique({ where: { id: parent.id } })
  },
}

export default Outfit
