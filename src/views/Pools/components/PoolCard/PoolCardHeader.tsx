import { CardHeader, Flex, Heading, Text } from '@pancakeswap/uikit'
import { ReactNode } from 'react'
import styled from 'styled-components'

// background: ${({ isFinished, background, theme }) =>
// isFinished ? theme.colors.backgroundDisabled : theme.colors.gradients[background]};
const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>` 
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0px 0px 22.0779px rgba(255, 255, 255, 0.05), inset 0px 1.2987px 1.2987px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(27.9221px);
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
`

const PoolCardHeader: React.FC<
  React.PropsWithChildren<{
    isFinished?: boolean
    isStaking?: boolean
  }>
> = ({ isFinished = false, isStaking = false, children }) => {
  const background = isStaking ? 'bubblegum' : 'cardHeader'

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        {children}
      </Flex>
    </Wrapper>
  )
}

export const PoolCardHeaderTitle: React.FC<
  React.PropsWithChildren<{ isFinished?: boolean; title: ReactNode; subTitle: ReactNode }>
> = ({ isFinished, title, subTitle }) => {
  return (
    <Flex flexDirection="column">
      <Heading color={isFinished ? 'textDisabled' : 'white'} scale="lg">
        {title}
      </Heading>
      <Text fontSize="14px" color={isFinished ? 'textDisabled' : 'textSubtle'}>
        {subTitle}
      </Text>
    </Flex>
  )
}

export default PoolCardHeader
