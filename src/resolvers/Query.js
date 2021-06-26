const Query = {
  users(parent, args, { db }, info) {
    console.log(db.users, 'what is this')
    return db.users.map((user) => {
      return user
    })
  },

  outfits(parent, args, { db }, info) {
    console.log(db.outfits, 'outfits')
    return db.outfits.map((outfit) => {
      return outfit
    })
  },
}

export default Query
