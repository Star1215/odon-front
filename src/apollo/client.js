import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const Exchange = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/odonfinance/exchange',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const Block = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/odonfinance/block',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})



