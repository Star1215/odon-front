import { Box, ButtonMenu, ButtonMenuItem, Flex } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Search from 'views/Info/components/InfoSearch'

const NavWrapper = styled(Flex)`
  background: ${({ theme }) => theme.colors.gradients.cardHeader};
  background: transparent;
  box-shadow: inset 0px 0px 22.0779px rgba(255, 255, 255, 0.05), inset 0px 1.2987px 1.2987px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(27.9221px);
  justify-content: space-between;
  padding: 20px 16px;
  flex-direction: column;
  gap: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 20px 40px;
    flex-direction: row;
  }
`

const StyledButtonMenu = styled(ButtonMenu)`
  background: transparent !important;
  `

const InfoNav = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const isPools = router.pathname === '/info/pools'
  const isTokens = router.pathname === '/info/tokens'
  let activeIndex = 0
  if (isPools) {
    activeIndex = 1
  }
  if (isTokens) {
    activeIndex = 2
  }
  return (
    <NavWrapper>
      <Box>
        <StyledButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
          <ButtonMenuItem as={NextLinkFromReactRouter} to="/info">
            {t('Overview')}
          </ButtonMenuItem>
          <ButtonMenuItem as={NextLinkFromReactRouter} to="/info/pools">
            {t('Pools')}
          </ButtonMenuItem>
          <ButtonMenuItem as={NextLinkFromReactRouter} to="/info/tokens">
            {t('Tokens')}
          </ButtonMenuItem>
        </StyledButtonMenu>
      </Box>
      <Box width={['100%', '100%', '250px']}>
        <Search />
      </Box>
    </NavWrapper>
  )
}

export default InfoNav
