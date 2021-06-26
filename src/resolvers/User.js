const User = {
  outfit(parent, args, { db }, info) {
    // return db.user.id === parent.author
    return db.outfits.filter((outfit) => {
      return outfit.author === parent.id
    })
  },
}

export { User as default }
