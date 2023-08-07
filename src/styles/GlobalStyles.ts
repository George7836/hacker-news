import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({theme}) => theme.colors.primary};
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`
export default GlobalStyles