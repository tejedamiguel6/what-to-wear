const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary')

import { APP_SECRET } from '../utils'
require('dotenv').config()

const Mutation = {
  async signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    const user = await context.prisma.user.create({
      data: { name: args.name, email: args.email, age: args.age, password },
    })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    return {
      user,
      token,
    }
  },

  async createOutfit(parent, args, context, info) {
    const { userId } = context
    console.log(userId, 'this is the context')

    const newOutfit = await context.prisma.outfit.create({
      data: {
        ...args.data,
        author: { connect: { id: userId } },
      },
    })
    context.pubsub.publish('NEW_OUTFIT', newOutfit)
    return newOutfit
  },



  

  async login(parent, args, context, info) {
    const user = await context.prisma.user.findUnique({
      where: { email: args.email },
    })
    if (!user) {
      throw new Error('No User found')
    }
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid Password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
      token,
      user,
    }
  },

  async vote(parent, args, context, info) {
    const userId = context.userId
    const vote = await context.prisma.vote.findUnique({
      where: {
        outfitId_userId: {
          outfitId: Number(args.outfitId),
          userId: userId,
        },
      },
    })
    if (Boolean(vote)) {
      throw new Error(`Already voted for outfit: ${args.outfitId}`)
    }
    console.log('vote', vote)

    const newVote = context.prisma.vote.create({
      data: {
        author: { connect: { id: userId } },
        outfits: { connect: { id: Number(args.outfitId) } },
      },
    })
    context.pubsub.publish('NEW_VOTE', newVote)
    return newVote
  },
}

export { Mutation as default }
