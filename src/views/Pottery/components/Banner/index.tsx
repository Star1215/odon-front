import styled from 'styled-components'
import { useMemo } from 'react'
import { Flex, Box, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import StakeToWinButton from 'views/Pottery/components/Banner/StakeToWinButton'
import { BannerTimer } from 'views/Pottery/components/Timer'
import { OutlineText, DarkTextStyle } from 'views/Pottery/components/TextStyle'
import TicketsDecorations from 'views/Pottery/components/Banner/TicketsDecorations'
import { getBalanceNumber } from 'utils/formatBalance'
import { useVaultApy } from 'hooks/useVaultApy'
import { weeksToSeconds } from 'views/Pools/components/utils/formatSecondsToWeeks'
import Balance from 'components/Balance'
import { usePotteryData } from 'state/pottery/hook'

const PotteryBanner = styled(Flex)`
  position: relative;
  overflow: hidden;
  padding: 64px 0 75px 0;
  background: linear-gradient(180deg, #ffd800 0%, #fdab32 100%);

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 87px 0 148px 0;
  }
`

const Decorations = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(/images/pottery/bg-star.svg);
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
  pointer-events: none;
`

const BannerBunny = styled.div`
  width: 221px;
  height: 348px;
  margin: 63px auto auto auto;
  background: url(/images/pottery/banner-bunny.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 370px;
    height: 549px;
    margin-top: 0;
  }
`

const BalanceStyle = styled(Balance)`
  padding: 0 2px;
  color: ${({ theme }) => theme.colors.secondary};
  background: #ffffff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 8px transparent;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px rgba(14, 14, 44, 0.1);
`

interface BannerProps {
  handleScroll: () => void
}

const Banner: React.FC<React.PropsWithChildren<BannerProps>> = ({ handleScroll }) => {
  const { t } = useTranslation()
  const cakePriceBusd = usePriceCakeBusd()
  const { publicData } = usePotteryData()
  const { getLockedApy } = useVaultApy()

  const prizeInBusd = publicData.totalPrize.times(cakePriceBusd)
  const prizeTotal = getBalanceNumber(prizeInBusd)

  const apyDisplay = useMemo(() => {
    const apy = getLockedApy(weeksToSeconds(10))
    return !Number.isNaN(apy) ? `${Number(apy).toFixed(2)}%` : '0%'
  }, [getLockedApy])

  return (
    <PotteryBanner>
      <Decorations />
      <TicketsDecorations />
      <Flex
        margin="auto"
        style={{ zIndex: '1' }}
        flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
      >
        <BannerBunny />
        <Flex
          ml={['0', '0', '0', '46px']}
          flexDirection="column"
          alignItems={['center', 'center', 'center', 'flex-start']}
        >
          <Flex>
            <OutlineText
              mb="4px"
              fontSize={['20px', '20px', '20px', '20px', '24px']}
              style={{ alignSelf: 'flex-end' }}
              bold
              defaultType
            >
              {t('The Odon Finance')}
            </OutlineText>
            <OutlineText fontSize={['24px', '24px', '24px', '24px', '32px']} bold ml="4px">
              {t('Pottery')}
            </OutlineText>
          </Flex>
          <BalanceStyle bold prefix="$" value={prizeTotal || 0} decimals={0} fontSize={['40px', '64px']} />
          <DarkTextStyle m="-16px 0 0 0" fontSize={['32px', '40px']} bold>
            {t('To be won !')}
          </DarkTextStyle>
          <StakeToWinButton handleScroll={handleScroll} />
          <Box style={{ marginTop: '30px' }}>
            <Text color="white" bold as="span">
              {t('Deposit CAKE for')}
            </Text>
            <DarkTextStyle ml="3px" bold as="span">
              {t('10 Weeks to earn')}
            </DarkTextStyle>
          </Box>
          <Box>
            <Text color="white" bold as="span">
              {t('to earn')}
            </Text>
            <DarkTextStyle m="0 3px" bold as="span">
              {apyDisplay}
            </DarkTextStyle>
            <Text color="white" bold as="span">
              {t('APY')}
            </Text>
          </Box>
          <Box>
            <Text color="white" bold as="span">
              {t('And a chance to')}
            </Text>
            <DarkTextStyle ml="3px" bold as="span">
              {t('win prize pot!')}
            </DarkTextStyle>
          </Box>
          <BannerTimer />
        </Flex>
      </Flex>
    </PotteryBanner>
  )
}

export default Banner
