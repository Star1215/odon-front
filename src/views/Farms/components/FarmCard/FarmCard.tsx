import { useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Card, Flex, Text, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { getBlockExploreLink } from 'utils'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { getAddress } from 'utils/addressHelpers'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import { FarmWithStakedValue } from '../types'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'
import BoostedApr from '../YieldBooster/components/BoostedApr'

const StyledCard = styled(Card)`
  align-self: baseline;
  max-width: 100%;
  margin: 0 0 24px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`

const FarmCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
`

const ExpandingWrapper = styled.div`
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
`

const StyledSkeleton =  styled(Skeleton)`
  background-color: #1ECBDD !important;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  displayApr: string
  removed: boolean
  cakePrice?: BigNumber
  account?: string
  originalLiquidity?: BigNumber
}

const FarmCard: React.FC<React.PropsWithChildren<FarmCardProps>> = ({
  farm,
  displayApr,
  removed,
  cakePrice,
  account,
  originalLiquidity,
}) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const liquidity =
    farm?.liquidity && originalLiquidity?.gt(0) ? farm.liquidity.plus(originalLiquidity) : farm.liquidity

  const totalValueFormatted =
    liquidity && liquidity.gt(0)
      ? `$${liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : ''

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANODENA', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : t('ODON + Fees')

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = getAddress(farm.lpAddresses)
  const isPromotedFarm = farm.token.symbol === 'ODENA'

  const toggleExpandableSection = useCallback(() => {
    setShowExpandableSection((prev) => !prev)
  }, [])

  return (
    <StyledCard isActive={isPromotedFarm}>
      <FarmCardInnerContainer>
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          isCommunityFarm={farm.isCommunity}
          token={farm.token}
          quoteToken={farm.quoteToken}
          boosted={farm.boosted}
        />
        {!removed && (
          <Flex justifyContent="space-between" alignItems="center">
            <Text>{t('APR')}:</Text>
            <Text bold style={{ display: 'flex', alignItems: 'center' }}>
              {farm.apr ? (
                <>
                  {farm.boosted ? (
                    <BoostedApr mr="4px" lpRewardsApr={farm.lpRewardsApr} apr={farm.apr} pid={farm?.pid} />
                  ) : null}
                  <ApyButton
                    variant="text-and-button"
                    pid={farm.pid}
                    lpSymbol={farm.lpSymbol}
                    multiplier={farm.multiplier}
                    lpLabel={lpLabel}
                    addLiquidityUrl={addLiquidityUrl}
                    cakePrice={cakePrice}
                    apr={farm.apr}
                    displayApr={displayApr}
                    strikethrough={farm.boosted}
                  />
                </>
              ) : (
                <StyledSkeleton height={24} width={80} />
              )}
            </Text>
          </Flex>
        )}
        <Flex justifyContent="space-between">
          <Text>{t('Earn')}:</Text>
          <Text bold>{earnLabel}</Text>
        </Flex>
        <Flex justifyContent="space-between" padding="12px 0px">
          <Text textTransform="uppercase" color="textSubtle">{t('Lock Period')}:</Text>
          {farm.lockTime ? (
            <Text>{Number(farm.lockTime)/86400} {t('(days)')}</Text>
          ) : (
            <StyledSkeleton ml="4px" width={60} height={24} />
          )}
        </Flex>
        <Flex justifyContent="space-between" padding="12px 0px">
          <Text textTransform="uppercase" color="textSubtle">{t('Deposit Fee')}:</Text>
          {farm.depositFee || farm.depositFee === 0 ? (
            <Text>{farm.depositFee}%</Text>
          ) : (
            <StyledSkeleton ml="4px" width={60} height={24} />
          )}
        </Flex>
        <Flex justifyContent="space-between" padding="12px 0px">
          <Text textTransform="uppercase" color="textSubtle">{t('Withdraw Fee')}:</Text>
          {farm.withdrawFee ? (
            <Text>{farm.withdrawFee / 100}%</Text>
          ) : (
            <StyledSkeleton ml="4px" width={60} height={24} />
          )}
        </Flex>
        <CardActionsContainer
          farm={farm}
          lpLabel={lpLabel}
          account={account}
          addLiquidityUrl={addLiquidityUrl}
          displayApr={displayApr}
        />
      </FarmCardInnerContainer>

      <ExpandingWrapper>
        <ExpandableSectionButton onClick={toggleExpandableSection} expanded={showExpandableSection} />
        {showExpandableSection && (
          <DetailsSection
            removed={removed}
            bscScanAddress={getBlockExploreLink(lpAddress, 'address')}
            infoAddress={`/info/pool/${lpAddress}`}
            totalValueFormatted={totalValueFormatted}
            lpLabel={lpLabel}
            addLiquidityUrl={addLiquidityUrl}
            isCommunity={farm.isCommunity}
            auctionHostingEndDate={farm.auctionHostingEndDate}
          />
        )}
      </ExpandingWrapper>
    </StyledCard>
  )
}

export default FarmCard
