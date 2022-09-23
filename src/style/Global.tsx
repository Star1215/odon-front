import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    // background-color: ${({ theme }) => theme.colors.background};
    background: url('images/bg-dark.png');
    background-size: cover;
    margin-top: 180px;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
