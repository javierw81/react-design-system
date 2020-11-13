import { createGlobalStyle } from 'styled-components';

export const theme = {
    container: {
        default: '700px'
    },
    font: {
        size: {
            default: '16px'
        }
    },
    color: '#FFFFFF',
    primary: {
        color: '#365b87'
    },
    secondary: {
        color: '#CCCCCC'
    }
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${theme.font.size.default};
  }  
  body {
    margin: 0;
  }
`;