const users = [
  {
    id: '1',
    name: 'Robert',
    email: 'rob@example.com',
    age: 37,
  },
  {
    id: '8',
    name: 'miguel',
    email: 'miguel@aool.com',
    age: 28,
  },
  {
    id: '2',
    name: 'dude',
    email: 'somedude@aool.com',
    age: 29,
  },
]

const outfits = [
  {
    id: '1',
    top: 'blue shirt',
    bottom: 'jeans',
    shoes: 'sneakers',
    published: false,
    author: '1',
  },
  {
    id: '2',
    top: 'yellow shirt',
    bottom: 'shorts',
    shoes: 'boots',
    published: true,
    author: '2',
  },
]

const votes = [
  {
    id: '1',
    outfits: '2',
    author: '2',
  },
  {
    id: '2',
    outfits: '2',
    author: '1',
  },
]
// this is displaying that "some dude" votes on outfit number two which is yellow shirt

const db = {
  users,
  outfits,
  votes,
}

export { db as default }
