import styled from 'styled-components'
import PageSection from 'components/PageSection'
import Cookies from 'universal-cookie';
import { useQueryParam, StringParam, withDefault } from 'use-query-params'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { BaseLayout, Button, Card, CardHeader, Flex, Image, Link, Text } from '@pancakeswap/uikit'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import { isAddress } from 'utils';
import rot13 from 'utils/encode';
import ConnectWalletButton from 'components/ConnectWalletButton'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import useTotalSupply from 'hooks/useTotalSupply';
import { moonTokens } from 'config/constants/tokens';
import { useGetCakeBalance } from 'hooks/useTokenBalance';
import { useOdenaBurnSupply, useOdenaTotalSupply, useTotalValue } from 'hooks/useTotalReferralCount';
import { useFarms } from 'state/farms/hooks';
import useDexStats from 'hooks/useDexStats';
import { Follow, Timeline, Tweet } from 'react-twitter-widgets'
import TwitterCard from './components/TwitterCard';



const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Hero = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 36px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 36px;
  margin: auto;
  padding: 16px;
  max-width: 900px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const TweetWrapper = styled.div`
  margin-left: 10px;
  background: rgba(255, 255, 255, 0.03);
`



const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()

  const odenaTotalSupply = useOdenaTotalSupply()
  const odenaBurnSupply = useOdenaBurnSupply()
  const { regularCakePerBlock } = useFarms()

  const tvl = useTotalValue()
  const dexStats = useDexStats()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const cookies = new Cookies()
  const [ref, setNum] = useQueryParam('ref', StringParam);

  if (ref) {
    if (isAddress(rot13(ref))) {
      cookies.set("ref", ref)
    }
  }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <Hero>
        <Text fontSize={40} fontWeight={700}> Welcome to Odon</Text>
        <Text fontSize={40} fontWeight={300}>A next evolution DeFi exchange on MoonRiver and BSC</Text>
      </Hero>
      <Cards>
        <Card>
          <Image src="/images/trade.png" alt="" width={64} height={64} style={{ margin: 'auto', marginTop: '16px' }} />
          <Text fontSize={28} mt={16} textAlign="center">Trade assets on Odon</Text>
          <Flex mt={16} justifyContent='center' mb={16}>
            <Link mr="16px" href="/swap">
              <Button variant="primary">{t('Trade')}</Button>
            </Link>
          </Flex>
        </Card>
        <Card>
          <Image src="/images/farms.png" alt="" width={64} height={64} style={{ margin: 'auto', marginTop: '16px' }} />
          <Text fontSize={28} mt={16} textAlign="center">Farms</Text>
          <Flex mt={16} justifyContent='center' mb={16}>
            <Link mr="16px" href="/farms">
              <Button variant="primary">{t('Stake LP Tokens')}</Button>
            </Link>
          </Flex>
        </Card>
        <Card>
          <Image src="/images/pools.png" alt="" width={64} height={64} style={{ margin: 'auto', marginTop: '16px' }} />
          <Text fontSize={28} mt={16} textAlign="center">Pools</Text>
          <Flex mt={16} justifyContent='center' mb={16}>
            <Link mr="16px" href="/pools">
              <Button variant="primary">{t('Stake Tokens')}</Button>
            </Link>
          </Flex>
        </Card>
        <Card>
          <Image src="/images/referral-04.png" alt="" width={64} height={64} style={{ margin: 'auto', marginTop: '16px' }} />
          <Text fontSize={28} mt={16} textAlign="center">Referral</Text>
          <Flex mt={16} justifyContent='center' mb={16}>
            <Link mr="16px" href="/referral">
              <Button variant="primary">{t('Referral')}</Button>
            </Link>
          </Flex>
        </Card>
        {/* Infor Stats */}
        <Card>
          <Text fontSize={28} mt={16} textAlign="center">Odena Stats</Text>
          <Flex mt={16} style={{ display: 'grid', marginLeft: '24px', marginRight: '24px' }} mb={16}>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Text fontSize={16} fontWeight={400}> Total ODENA Supply</Text>
              <Text fontSize={16} fontWeight={400}> {odenaTotalSupply.toString()} </Text>
            </div>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Text fontSize={16} fontWeight={400}> Total ODENA Burned</Text>
              <Text fontSize={16} fontWeight={400}> {odenaBurnSupply.toString()} </Text>
            </div>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Text fontSize={16} fontWeight={400}> New ODENA/Block</Text>
              <Text fontSize={16} fontWeight={400}> {regularCakePerBlock} </Text>
            </div>
          </Flex>
        </Card>

        <Card>
          <Text fontSize={28} mt={16} textAlign="center">Total Value Locked</Text>
          <Flex mt={16} style={{ display: 'grid', marginLeft: '24px', marginRight: '24px' }} mb={16}>
            <Text fontSize={36} fontWeight={400}> {tvl?.toFixed(3)}</Text>
            <Text fontSize={20} fontWeight={400}> Across all LPs and Pools </Text>

          </Flex>
        </Card>

        {/* <Card>
          <Text fontSize={28} mt={16} textAlign="center">Tweets</Text>
          <TweetWrapper>
            <a className="twitter-timeline" data-lang="en" data-width="400" data-height="300" data-theme="dark" data-chrome="tranparent nofooter noheader" href="https://twitter.com/odonfinance" style={{ background: 'transparent !important' }}>Tweets by OdonFinance</a>
          </TweetWrapper>
          <script async src="https://platform.twitter.com/widgets.js" />
          <br /><br />
          <TweetWrapper>
            <Follow username="odonfinance" options={{ size: "large" }} data-chrome="transparent" />
          </TweetWrapper>
        </Card> */}

        <Card>
          <TwitterCard />
        </Card>

        <Card>
          <Text fontSize={28} mt={16} textAlign="center">DEX Stats</Text>
          <Flex mt={16} style={{ display: 'grid', marginLeft: '24px', marginRight: '24px' }} mb={16}>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Text fontSize={16} fontWeight={400}> Total Liquidity </Text>
              {dexStats && dexStats.totalLiquidityUSD && <Text fontSize={16} fontWeight={400}> {Number(dexStats?.totalLiquidityUSD).toFixed(3)} </Text>}
            </div>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Text fontSize={16} fontWeight={400}> Total Volume </Text>
              {dexStats && dexStats.totalVolumeUSD && <Text fontSize={16} fontWeight={400}> {Number(dexStats?.totalVolumeUSD).toFixed(3)} </Text>}
            </div>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Text fontSize={16} fontWeight={400}> Total Pairs </Text>
              {dexStats && dexStats.pairCount && <Text fontSize={16} fontWeight={400}> {Number(dexStats?.pairCount)} </Text>}
            </div>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
              <Text fontSize={16} fontWeight={400}> Total Transactions </Text>
              {dexStats && dexStats.txCount && <Text fontSize={16} fontWeight={400}> {Number(dexStats?.txCount)} </Text>}
            </div>
          </Flex>
        </Card>
      </Cards>
      <div style={{ marginBottom: '48px' }}>
      </div>
    </>
  )
}

export default Home
