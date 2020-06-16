import { createGlobalStyle } from 'styled-components';
import { headingsFont, primaryFont } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${ primaryFont };
  }
  
  h1, h2, h3, h4, h5 {
    font-family: ${ headingsFont };
  }

  main {
    width: 90%;
    margin: 0 auto;
  }
`;