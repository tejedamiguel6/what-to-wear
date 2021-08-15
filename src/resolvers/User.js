const User = {
  outfits(parent, args, { prisma }, info) {
    console.log('you clicked me', parent)
    return prisma.outfit.findUnique({ where: { id: parent.id } })
  },

  votes(parent, args, { prisma }, info) {
    return prisma.vote.findUnique({ where: { id: parent.id } })
  },

  profiles(parent, args, { prisma }, info) {
    console.log(parent, 'this is the parent/is thisi showing')
    return prisma.profile.findUnique({ where: { id: parent.id } })
  },
}

export { User as default }

// user can vote on an outfit
// outfit can have many votes
//
