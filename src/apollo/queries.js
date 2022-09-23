import gql from 'graphql-tag'

const FACTORY_ADDRESS = '0x481E73cf29EB246728cF27c350701400Ba58d395'
const BUNDLE_ID = '1'

export const GLOBAL_DATA = (block) => {
  const queryString = ` query odonswapFactories {
      odonswapFactories(
       ${block ? `block: { number: ${block}}` : ``} 
       where: { id: "${FACTORY_ADDRESS}" }) {
        id
        pairCount
        totalVolumeUSD
        totalVolumeETH
        untrackedVolumeUSD
        totalLiquidityUSD
        totalLiquidityETH
        txCount
      }
    }`
  return gql(queryString)
}

export const RECENT_WORSHIPS = (block) => {
  const queryString = ` query recentWorships {
    worshipRecords(
      first: 20,
      orderBy: block, 
      orderDirection: desc
    ) {
      tx
      block
      user
      amount
      prayer
    }
  }`
  return gql(queryString)
}

export const TOP_WORSHIPS = (block) => {
  const queryString = ` query topWorships {
    worshipRecords(
      first: 20,
      orderBy: amount, 
      orderDirection: desc
    ) {
      tx
      block
      user
      amount
      prayer
    }
  }`
  return gql(queryString)
}