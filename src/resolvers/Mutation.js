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

  async createOutfit(parent, args, context, info) {
    const { userId } = context
    console.log(userId, 'this is the context')

    return await context.prisma.outfit.create({
      data: {
        ...args.data,
        author: { connect: { id: userId } },
      },
    })
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
}

export { Mutation as default }
