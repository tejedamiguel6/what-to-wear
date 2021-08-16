import client from '../apollo-client'
import { gql } from '@apollo/client/core'

import styles from '../styles/Home.module.css'

export default function Home({ outfits }) {
  console.log(outfits, 'outfits')
  return (
    <div>
      <h1>Outfits</h1>
      <ul className={styles.flex}>
        {outfits.map((outfit) => {
          return (
            <div>
              <li key={outfit.id}>
                <img src={outfit.outfitImage} />
                <p>Top: {outfit.top} </p>
                <p>Bottom: {outfit.bottom}</p>
                <p>Shoes: {outfit.shoes}</p>
              </li>
              <span>By:{outfit.author.name}</span>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Outfits {
        outfits {
          id
          outfitImage
          top
          bottom
          shoes
          author {
            name
          }
        }
      }
    `,
  })
  return {
    props: {
      outfits: data.outfits,
    },
  }
}
