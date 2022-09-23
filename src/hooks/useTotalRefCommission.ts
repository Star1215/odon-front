import { useState } from 'react'
import BigNumber from 'bignumber.js'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getMasterchefContract, getReferralContract } from 'utils/contractHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { useSlowRefreshEffect } from './useRefreshEffect'

const masterChefContract = getMasterchefContract()
const referralContract = getReferralContract()

const useTotalRefCommission = () => {
    const [commission, setCommission] = useState(0)
    const { account } = useActiveWeb3React()

    useSlowRefreshEffect(() => {
        async function fetchTotalRef() {
            const totalCommissions = await referralContract.totalReferralCommissions(account)
            console.log("hooks / useTotalRefCommission / totalCommissions : ", totalCommissions)
            setCommission(getBalanceNumber(new BigNumber(totalCommissions.toString())))
        }
        fetchTotalRef()
    }, [account])

    return commission
}

export default useTotalRefCommission


export const useGetReferrate = () => {

    const [commission, setCommission] = useState(0)

    useSlowRefreshEffect(() => {
        async function fetchTotalRef() {
            const commissionrate = await masterChefContract.referralCommissionRate()
            setCommission(commissionrate/100)
        }
        fetchTotalRef()
    }, [])

    return commission
}