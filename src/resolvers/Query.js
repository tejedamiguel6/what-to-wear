// so far this works, but i need to find a better way

const Query = {
  users: function (parent, args, { prisma }, info) {
    return prisma.user.findMany()
  },
  outfits: function (parent, args, { prisma }, info) {
    // console.log(outfits, 'what is the parent')
    return prisma.outfit.findMany()
  },
  votes: async function (parent, args, { prisma }, info) {
    return prisma.vote.findMany()
  },
}

export default Query
