const Outfit = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author
    })

    // return db.outfits.find((outfit) => {
    //   console.log(parent.author, 'PARENT')
    //   return outfit.id === parent.author
    // })
  },
}

export default Outfit
