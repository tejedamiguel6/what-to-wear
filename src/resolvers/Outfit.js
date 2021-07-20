const Outfit = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author
    })
  },

  votes(parent, args, { db }, info) {
    return db.votes.filter((vote) => {
      console.log('this is the parent', parent.author, 'this is the vote', vote)

      return vote.outfits === parent.id
    })
  },
}

export default Outfit
