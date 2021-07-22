import { v4 as uuidv4 } from 'uuid'
const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => {
      return user.email === args.email
    })
    if (emailTaken) {
      throw new Error('email is taken')
    }

    const user = {
      id: uuidv4(),
      name: args.name,
      email: args.email,
      age: args.age,
    }

    db.users.push(user)

    return user
  },

  createOutfit(parents, args, { db }, info) {
    const userExists = db.users.some((user) => {
      return user.id === args.author
    })
    if (!userExists) {
      throw new Error('User not found')
    }

    const outfit = {
      id: uuidv4(),
      top: args.top,
      bottom: args.bottom,
      shoes: args.shoes,
      published: args.published,
      author: args.author,
    }

    db.outfits.push(outfit)

    return outfit
  },
}

export default Mutation
