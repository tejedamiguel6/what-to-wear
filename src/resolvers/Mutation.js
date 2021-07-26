import { v4 as uuidv4 } from 'uuid'
const Mutation = {
  // createUser(parent, args, { db }, info) {
  //   const emailTaken = db.users.some((user) => {
  //     return user.email === args.data.email
  //   })
  //   if (emailTaken) {
  //     throw new Error('email is taken')
  //   }

  //   const user = {
  //     id: uuidv4(),
  //     ...args.data,
  //   }

  //   db.users.push(user)

  //   return user
  // },

  // updateUser(parent, args, { db }, info) {
  //   const { id, data } = args
  //   const userExist = db.users.find((user) => user.id === id)
  //   if (!userExist) {
  //     throw new Error('Error not found')
  //   }

  //   if (typeof data.email === 'string') {
  //     const isEmailtaken = db.users.some((user) => user.email === data.email)
  //     if (isEmailtaken) {
  //       throw new Error('email is taken ')
  //     }
  //     user.email = data.email
  //   }

  //   if (typeof data.name === 'string') {
  //     user.name = data.name
  //   }

  //   if (typeof data.age !== 'undefined') {
  //     user.age = data.age
  //   }

  //   return user
  // },

  createOutfit: async function (parents, args, { prisma }, info) {
    console.log(prisma, 'here is the data')
    const newOutfit = await prisma.outfit.create({
      data: {
        top: args.top,
      },
    })

    // const userExists = db.users.some((user) => {
    //   return user.id === args.data.author
    // })
    // if (!userExists) {
    //   throw new Error('User not found')
    // }

    // const outfit = {
    //   id: uuidv4(),
    //   ...args.data,
    // }

    // db.outfits.push(outfit)

    // return outfit

    return newOutfit
  },

  deleteOutfit(parent, args, { db }, info) {
    // delete outfit data here
  },
}

export { Mutation as default }
