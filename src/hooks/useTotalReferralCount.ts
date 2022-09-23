import { useState } from 'react'
import BigNumber from 'bignumber.js'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getBalanceNumber } from 'utils/formatBalance'
import { getCakeContract, getMasterchefContract, getReferralContract } from 'utils/contractHelpers'
import { useSlowRefreshEffect } from './useRefreshEffect'
import { useFarms } from 'state/farms/hooks'
import { useBNBBusdPrice, useCakeBusdPrice } from './useBUSDPrice'
import { livePools } from 'config/constants/pools'
import { usePool, usePoolsWithVault } from 'state/pools/hooks'
import { poolsConfig } from 'config/constants'

const referralContract = getReferralContract()
const odenaContract = getCakeContract()
const masterContract = getMasterchefContract()

const useTotalReferralCount = () => {
    const [count, setCount] = useState(0)
    const { account } = useActiveWeb3React()

    useSlowRefreshEffect(() => {
        async function fetchTotalRef() {
            const total = await referralContract.referralsCount(account)
            console.log("hooks / useTotalReferalCount / total : ", total)
            setCount(getBalanceNumber(new BigNumber(total.toString()), 0))
        }
        fetchTotalRef()
    }, [account])

    return count
}

export const useOdenaTotalSupply = () => {
    const [count, setCount] = useState(0)

    useSlowRefreshEffect(() => {
        async function fetchTotalSupply() {
            const total = await odenaContract.totalSupply()
            setCount(getBalanceNumber(new BigNumber(total.toString())))
        }
        fetchTotalSupply()
    }, [odenaContract])

    return count
}

export const useOdenaBurnSupply = () => {
    const [count, setCount] = useState(0)
    const zeroAddress = '0x0000000000000000000000000000000000000000'
    useSlowRefreshEffect(() => {
        async function fetchBurnSupply() {
            const total = await odenaContract.balanceOf(zeroAddress)
            setCount(getBalanceNumber(new BigNumber(total.toString())))
        }
        fetchBurnSupply()
    }, [odenaContract])

    return count
}

// export const useOdenaPerBlock = () => {
//     const [count, setCount] = useState(0)
//     useSlowRefreshEffect(() => {
//         async function fetchBurnSupply() {
//             const total = await masterContract.odenaPerBlock()
//             setCount(getBalanceNumber(new BigNumber(total.toString())))
//         }
//         fetchBurnSupply()
//     }, [odenaContract])

//     return count
// }

export const useTotalValue = () => {
    const { data: farmsLP, poolLength} = useFarms()
    const movrPrice = useBNBBusdPrice()
    const movrPriceBN = new BigNumber(movrPrice?.toFixed(3))
    const cakePrice = useCakeBusdPrice()
    const cakePriceBN = new BigNumber(cakePrice?.toFixed(3))
    let value = new BigNumber(0)

    const { pools } =  usePoolsWithVault()
    let poolsTotalStaked = new BigNumber(0)
    pools.map((pool) => {
        const { totalStaked, stakingTokenPrice } = pool
        const poolStaked = totalStaked.times(stakingTokenPrice)
        poolsTotalStaked.plus(poolStaked)
    })
    console.log('debug pools total Staked', poolsTotalStaked.toNumber())
    
    for(let i = 0; i < poolLength; i++) {
        const  farm = farmsLP[i]
        if(farm.lpTotalInQuoteToken) {
            let val
            if(farm.quoteToken.symbol === 'WMOVR') {
                val = (farm.lpTotalInQuoteToken).multipliedBy(movrPriceBN?.toNumber())
            } else if( farm.quoteToken.symbol === 'ODENA') {
                val = (farm.lpTotalInQuoteToken).multipliedBy(cakePriceBN?.toNumber())
            } else {
                val = farm.lpTotalInQuoteToken
            }
            if(!isNaN(val)) {
                value =  value.plus(val)
            }
        }
    }

    return value.plus(poolsTotalStaked)
}


export default useTotalReferralCount