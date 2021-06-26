const users = [
  {
    id: '1',
    name: 'john doe',
    email: 'tamal@aool.com',
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
    name: 'some dude',
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

const db = {
  users,
  outfits,
}

export { db as default }
