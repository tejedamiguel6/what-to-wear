// so far this works, but i need to find a better way

const Query = {
  users: async function (parent, args, { prisma }, info) {
    return prisma.user.findMany()
  },
  outfits: async function (parent, args, { prisma }, info) {
    return prisma.outfit.findMany()
  },
  votes: async function (parent, args, { prisma }, info) {
    return prisma.vote.findMany()
  },
}

// const Query = {
//   users(parent, args, { db }, info) {
//     return db.users.map((user) => {
//       return user
//     })
//   },

//   outfits(parent, args, { db }, info) {
//     return db.outfits.map((outfit) => {
//       return outfit
//     })
//   },

//   votes(parent, args, { db }, info) {
//     return db.votes.map((vote) => {
//       return vote
//     })
//   },
// }

export default Query
