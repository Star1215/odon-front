import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import { useGetReferrate } from 'hooks/useTotalRefCommission'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
  font-size: 24px;
`


const Blurb = styled(Text)`
  // color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-image: transparent;
  padding-bottom: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
`

const StyledContainer = styled(Container)`
  flex: 1;
  padding-right: 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const Hero = () => {

  const commistionrate = useGetReferrate()

  return (
    <StyledHero>
      <StyledContainer>
        <Title>Odon Finance Referral</Title>
        <Blurb>Share the referral link below to invite your friends and earn {commistionrate.toString()}% of your friends&apos; earnings Odon Finance!</Blurb>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
