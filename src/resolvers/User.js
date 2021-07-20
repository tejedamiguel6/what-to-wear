const User = {
  outfits(parent, args, { db }, info) {
    return db.outfits.filter((outfit) => {
      return outfit.author === parent.id
    })
  },

  votes(parent, args, { db }, info) {
    return db.votes.filter((vote) => {
      console.log('is this working', vote)
      return vote.author === parent.id
    })
  },
}

export { User as default }

// user can vote on an outfit
// outfit can have many votes
//
