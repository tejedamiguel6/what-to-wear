const User = {
  outfits(parent, args, { db }, info) {
    return db.outfits.filter((outfit) => {
      return outfit.author === parent.id
    })
  },
}

export { User as default }

// user can vote on an outfit
// outfit can have many votes
//
