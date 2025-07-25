import React from 'react'
import useTotalRefCommission from 'hooks/useTotalRefCommission'
import { Card, CardBody, CardFooter, Text, Heading } from '@pancakeswap/uikit'
import { getBalanceNumber } from '../../../utils/formatBalance'

const ReferralCommission = () => {

    const refCommission = useTotalRefCommission()
    return (
        <Card>
            <CardBody>
                <Text>Total Referral Commissions</Text>
            </CardBody>
            <CardFooter>
                <Heading size="lg">{refCommission} ODENAs</Heading>
            </CardFooter>
        </Card>
    )
}

export default ReferralCommission
