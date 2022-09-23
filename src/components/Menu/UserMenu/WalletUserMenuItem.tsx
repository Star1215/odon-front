import { Flex, UserMenuItem, WarningIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import { FetchStatus } from 'config/constants/types'
import { LOW_BNB_BALANCE } from './WalletModal'

interface WalletUserMenuItemProps {
  isWrongNetwork: boolean
  onPresentWalletModal: () => void
}

  // background: rgba(255, 255, 255, 0.03);
  // box-shadow: inset 0px 0px 22.0779px rgba(255, 255, 255, 0.05), inset 0px 1.2987px 1.2987px rgba(255, 255, 255, 0.15);
  // backdrop-filter: blur(27.9221px);

const StyledUserMenuItem = styled(UserMenuItem)`
  border-radius: 9px 9px 0px 0px;
` 
const WalletUserMenuItem: React.FC<React.PropsWithChildren<WalletUserMenuItemProps>> = ({
  isWrongNetwork,
  onPresentWalletModal,
}) => {
  const { t } = useTranslation()
  const { balance, fetchStatus } = useGetBnbBalance()
  const hasLowBnbBalance = fetchStatus === FetchStatus.Fetched && balance.lte(LOW_BNB_BALANCE)

  return (
    <StyledUserMenuItem as="button" onClick={onPresentWalletModal}>
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        {t('Wallet')}
        {hasLowBnbBalance && !isWrongNetwork && <WarningIcon color="warning" width="24px" />}
        {isWrongNetwork && <WarningIcon color="failure" width="24px" />}
      </Flex>
    </StyledUserMenuItem>
  )
}

export default WalletUserMenuItem
