import { gql, InMemoryCache } from "@apollo/client"

export const localCache = new InMemoryCache({
  addTypename: false,
})

const LocalCacheInitQuery = gql`
  query LocalCacheInit {
    shoppingCart
  }
`

export function initialLocalCache() {
  return localCache.writeQuery({
    query: LocalCacheInitQuery,
    data: {
      shoppingCart: null,
    },
  })
}
