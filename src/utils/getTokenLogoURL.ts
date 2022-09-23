import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = (token?: Token) => {
  if(token.address === '0x04486A7b832c5270B24d1c4B4E86F17b74B88549' ) {
    return 'https://bsc-odon-finance.netlify.app/images/tokens/0x04486A7b832c5270B24d1c4B4E86F17b74B88549.png'
  }
  if (token && mapping[token.chainId]) {
    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
  } 
  
  return null
}

export default getTokenLogoURL
