import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    width: 100vw;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text_gray};
    font: 400 16px Roboto, sans-serif;
  }
`
