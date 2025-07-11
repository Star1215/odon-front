import { NextLinkFromReactRouter } from 'components/NextLink'
import ToggleView from 'components/ToggleView/ToggleView'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, Toggle, Text, NotificationDot } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
  
`

const StyledButtonMenu = styled(ButtonMenu)`
  background: transparent;
  border: 1px solid rgba(73, 179, 193, 0.5);
`

const PoolTabButtons = ({ stakedOnly, setStakedOnly, hasStakeInFinishedPools, viewMode, setViewMode }) => {
  const router = useRouter()

  const { t } = useTranslation()

  const isExact = router.pathname === '/pools' || router.pathname === '/_mp/pools'

  const viewModeToggle = <ToggleView idPrefix="clickPool" viewMode={viewMode} onToggle={setViewMode} />

  const liveOrFinishedSwitch = (
    <Wrapper>
      <StyledButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle">
        <ButtonMenuItem as={NextLinkFromReactRouter} to="/pools" replace>
          {t('Live')}
        </ButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedPools}>
          <ButtonMenuItem id="finished-pools-button" as={NextLinkFromReactRouter} to="/pools/history" replace>
            {t('Finished')}
          </ButtonMenuItem>
        </NotificationDot>
      </StyledButtonMenu>
    </Wrapper>
  )

  const stakedOnlySwitch = (
    <ToggleWrapper>
      <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
      <Text style={{color: 'white'}}> {t('Staked only')}</Text>
    </ToggleWrapper>
  )

  return (
    <ViewControls>
      {viewModeToggle}
      {stakedOnlySwitch}
      {liveOrFinishedSwitch}
    </ViewControls>
  )
}

export default PoolTabButtons
