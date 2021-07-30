const User = {
  outfits(parent, args, { prisma }, info) {
    return prisma.outfit.findUnique({ where: { id: parent.id } })
  },

  votes(parent, args, { prisma }, info) {
    return prisma.vote.findUnique({ where: { id: parent.id } })
  },
}

export { User as default }

// user can vote on an outfit
// outfit can have many votes
//
