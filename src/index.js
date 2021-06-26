const { ApolloServer } = require('apollo-server')
const fs = require('fs')
const path = require('path')
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Outfit from './resolvers/Outfit'
import User from './resolvers/User'
import Vote from './resolvers/Vote'

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers: {
    Query,
    Mutation,
    Outfit,
    User,
    Vote,
  },
  context: {
    db,
  },
})

server.listen().then(({ url }) => console.log(`server running on ${url}`))
