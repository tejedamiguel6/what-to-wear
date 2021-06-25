const Query = {
  users(parent, args, { db }, info) {
    console.log(db.users, 'what is this')
    return db.users.map((user) => {
      return user
    })
  },
}

export default Query
