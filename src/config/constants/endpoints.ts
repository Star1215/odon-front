export const GRAPH_API_PROFILE = process.env.NEXT_PUBLIC_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION_BNB = process.env.NEXT_PUBLIC_GRAPH_API_PREDICTION_BNB
export const GRAPH_API_PREDICTION_CAKE = process.env.NEXT_PUBLIC_GRAPH_API_PREDICTION_CAKE

export const GRAPH_API_LOTTERY = process.env.NEXT_PUBLIC_GRAPH_API_LOTTERY
export const SNAPSHOT_BASE_URL = process.env.NEXT_PUBLIC_SNAPSHOT_BASE_URL
export const API_PROFILE = process.env.NEXT_PUBLIC_API_PROFILE
export const API_NFT = process.env.NEXT_PUBLIC_API_NFT
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export const GRAPH_API_POTTERY = process.env.NEXT_PUBLIC_GRAPH_API_POTTERY

/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'

// export const INFO_CLIENT = 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2'
export const INFO_CLIENT = 'https://api.thegraph.com/subgraphs/name/odonfinance/exchange'

// export const BLOCKS_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks'
export const BLOCKS_CLIENT = 'https://api.thegraph.com/subgraphs/name/odonfinance/block'

export const GRAPH_API_NFTMARKET = process.env.NEXT_PUBLIC_GRAPH_API_NFT_MARKET
export const GRAPH_HEALTH = 'https://api.thegraph.com/index-node/graphql'

export const TC_MOBOX_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/trading-competition-v3'
export const TC_MOD_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/trading-competition-v4'
