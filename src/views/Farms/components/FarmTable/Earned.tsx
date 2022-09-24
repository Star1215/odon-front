import styled from 'styled-components'
import { Skeleton } from '@pancakeswap/uikit'




export interface EarnedProps {
  earnings: number
  pid: number
}

interface EarnedPropsWithLoading extends EarnedProps {
  userDataReady: boolean
}

const StyledSkeleton =  styled(Skeleton)`
  background-color: #1ECBDD !important;
`

const Amount = styled.span<{ earned: number }>`
  color: ${({ earned, theme }) => (earned ? theme.colors.text : theme.colors.textDisabled)};
  display: flex;
  align-items: center;
`

const Earned: React.FunctionComponent<React.PropsWithChildren<EarnedPropsWithLoading>> = ({
  earnings,
  userDataReady,
}) => {
  if (userDataReady) {
    return <Amount earned={earnings}>{earnings.toLocaleString()}</Amount>
  }
  return (
    <Amount earned={0}>
      <StyledSkeleton width={60} />
    </Amount>
  )
}

export default Earned
