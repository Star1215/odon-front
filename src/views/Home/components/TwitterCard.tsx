import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from '@odonfinance/odena-uikit'
import BigNumber from 'bignumber.js/bignumber'
import useTheme from 'hooks/useTheme'
import { Follow, Timeline } from 'react-twitter-widgets'


const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const TwitterCard = () => {
  const { isDark } = useTheme()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Tweets
        </Heading>
        <a className="twitter-timeline" data-lang="en" data-width="400" data-height="300" data-theme="dark" data-chrome="nofooter noheader" href="https://twitter.com/odonfinance">Tweets by OdonFinance</a>
        <script async src="https://platform.twitter.com/widgets.js" />
        <br /><br />
       <Follow username="odonfinance" options={{ size: "large" }} />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
