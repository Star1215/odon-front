import { serializeTokens } from 'utils/serializeTokens'
import { moonTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(moonTokens)

export const CAKE_BNB_LP_MAINNET = '0x2831A0fE10bb81BAdD3AD97d182E9e995Fd22eeB'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    // v1pid: 0,
    lpSymbol: 'ODENA-MOVR LP',
    lpAddresses: {
      97: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      1285: CAKE_BNB_LP_MAINNET,
    },
    token: serializedTokens.odena,
    quoteToken: serializedTokens.wmovr,
  },
  {
    pid: 2,
    // v1pid: 2,
    lpSymbol: 'ODENA-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      1285: '0x621aEA8382F1f788C37aF6905444e6Fdc5a8B70b',
    },
    token: serializedTokens.odena,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    // v1pid: 3,
    lpSymbol: 'BUSD-MOVR LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      1285: '0x364D352a156C26ca6960c3B4e9Aa3Da061611659',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wmovr,
  },
  {
    pid: 1,
    // v1pid: 1,
    lpSymbol: 'ODENA-USDC LP',
    lpAddresses: {
      97: '0x25293964dcaFd8a6cDf97AFF8b6559FD4A5Af864',
      1285: '0x8d3a27d0f4EafD8E10d69Ef38916488642b78A5A',
    },
    token: serializedTokens.odena,
    quoteToken: serializedTokens.usdc,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  {
    pid: 4,
    // v1pid: 4,
    lpSymbol: 'ODENA-USDT LP',
    lpAddresses: {
      97: '',
      1285: '0x2B71D36CC33ae7CA1450E188509406D8B3fddc7F',
    },
    token: serializedTokens.odena,
    quoteToken: serializedTokens.usdt,
  },
  // {
  //   pid: 5,
  //   // v1pid: 5,
  //   lpSymbol: 'ODENA-BTC LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd3788A0A13A1545e1c5b2AB018E3d2b101Ae66Cc',
  //   },
  //   token: serializedTokens.odena,
  //   quoteToken: serializedTokens.btcb,
  // },
  // {
  //   pid: 6,
  //   // v1pid: 6,
  //   lpSymbol: 'ODENA-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x31cF2837352151dc611DEdD9551D4C3E8995018b',
  //   },
  //   token: serializedTokens.odena,
  //   quoteToken: serializedTokens.eth,
  // },
]

export default farms
