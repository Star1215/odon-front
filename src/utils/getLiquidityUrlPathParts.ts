// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
import { bscTokens, moonTokens } from 'config/constants/tokens'

const getLiquidityUrlPathParts = ({
  quoteTokenAddress,
  tokenAddress,
}: {
  quoteTokenAddress: string
  tokenAddress: string
}): string => {
  const wMovrAddress = moonTokens.wmovr.address
  const firstPart = !quoteTokenAddress || quoteTokenAddress === wMovrAddress ? 'MOVR' : quoteTokenAddress
  const secondPart = !tokenAddress || tokenAddress === wMovrAddress ? 'MOVR' : tokenAddress
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
