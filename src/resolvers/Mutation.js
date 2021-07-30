const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
import { APP_SECRET } from '../utils'

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

  async login(parent, args, { prisma }, info) {
    const user = await prisma.user.findUnique({
      where: {
        email: args.email,
      },
    })
    if (!user) {
      throw new Error('No User found')
    }

    const valid = await bcrypt.compare(args.password, user.pasword)
    if (!valid) {
      throw new Error('Invalid Password')
    }

    return {
      token,
      user,
    }
  },

  async createOutfit(parent, args, context, info) {
    const { userId } = context
    console.log(context, 'this is the context')

    return await context.prisma.outfit.create({
      data: {
        ...args,
        author: { connect: { id: userId } },
      },
    })
  },
}

export { Mutation as default }
