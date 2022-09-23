import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const MOON_PROD_NODE = 'https://rpc.api.moonriver.moonbeam.network'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const moonRpcProvider = new StaticJsonRpcProvider(MOON_PROD_NODE)

export default null
