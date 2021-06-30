const Query = {
  users(parent, args, { db }, info) {
    return db.users.map((user) => {
      return user
    })
  },

  outfits(parent, args, { db }, info) {
    return db.outfits.map((outfit) => {
      return outfit
    })
  },

  votes(parent, args, { db }, info) {
    return db.votes.map((vote) => {
      return vote
    })
  },
}

export default Query
