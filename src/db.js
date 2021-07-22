const users = [
  {
    id: '3',
    name: 'Bob',
    email: 'bob@example.com',
    age: 37,
  },
  {
    id: '2',
    name: 'miguel',
    email: 'miguel@example.com',
    age: 27,
  },
  {
    id: '4',
    name: 'Michelle Tejeda',
    email: 'michelle@aol.com',
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
    author: '3',
  },
  {
    id: '2',
    top: 'yellow shirt',
    bottom: 'shorts',
    shoes: 'boots',
    published: true,
    author: '3',
  },
]

const votes = [
  {
    id: '1',
    author: '2',
    outfits: '2',
  },
  {
    id: '2',
    author: '2',
    outfits: '1',
  },
]
// this is displaying that "some dude" votes on outfit number two which is yellow shirt

const db = {
  users,
  outfits,
  votes,
}

export { db as default }
