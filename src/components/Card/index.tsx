import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'

const Card = styled(Box)<{
  width?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  padding: ${({ padding }) => padding ?? '1.25rem'};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius ?? '16px'};
  background-color: ${({ theme }) => theme.colors.background};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  // background-color: ${({ theme }) => theme.colors.backgroundAlt};
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0px 0px 22.0779px rgba(255, 255, 255, 0.05), inset 0px 1.2987px 1.2987px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(13.961px);
  border-radius: 26px;
`

export const LightGreyCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};

`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.dropdown};
`
