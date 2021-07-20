const Vote = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author
    })
  },

  outfits(parent, args, { db }, info) {
    return db.outfits.find((outfit) => {
      return outfit.id === parent.outfits
    })
  },
}

export default Vote
