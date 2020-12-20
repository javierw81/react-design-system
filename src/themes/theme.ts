import { createGlobalStyle } from 'styled-components';

const fontColorLight = '#FFFFFF'
const fontColorDark = '#212529'
const borderSize = '1px'

export const theme = {
  container: {
    default: '700px'
  },
  font: {
    family: 'Verdana, sans-serif',
    weight: '400',
    color: fontColorLight,
    size: {
      default: '16px'
    }
  },
  border: {
    size: borderSize,
    radius: '0px',
  },
  primary: {
    fontColor: fontColorLight,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    hover: {
      fontColor: fontColorLight,
      backgroundColor: '#0069d9',
      borderColor: '#00062cc',
    },
    soft: {
      fontColor: '#004085',
      backgroundColor: '#cce5ff',
      borderColor: '#b8daff'
    }
  },
  secondary: {
    fontColor: fontColorLight,
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    hover: {
      fontColor: fontColorLight,
      backgroundColor: '#5a6268',
      borderColor: '#545b62',
    },
    soft: {
      fontColor: '#383d41',
      backgroundColor: '#e2e3e5',
      borderColor: '#d6d8db'
    }
  },
  success: {
    fontColor: fontColorLight,
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    hover: {
      fontColor: fontColorLight,
      backgroundColor: '#218838',
      borderColor: '#1e7e34',
    },
    soft: {
      fontColor: '#155724',
      backgroundColor: '#d4edda',
      borderColor: '#c3e6cb'
    }
  },
  danger: {
    fontColor: fontColorLight,
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    hover: {
      fontColor: fontColorLight,
      backgroundColor: '#c82333',
      borderColor: '#bd2130',
    },
    soft: {
      fontColor: '#721c24',
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb'
    }
  },
  warning: {
    fontColor: fontColorDark,
    backgroundColor: '#ffc107',
    borderColor: '#ffc107',
    hover: {
      fontColor: fontColorDark,
      backgroundColor: '#e0a800',
      borderColor: '#d39e00',
    },
    soft: {
      fontColor: '#856404',
      backgroundColor: '#fff3cd',
      borderColor: '#ffeeba'
    }
  },
  info: {
    fontColor: fontColorLight,
    backgroundColor: '#17a2b8',
    borderColor: '#17a2b8',
    hover: {
      fontColor: fontColorLight,
      backgroundColor: '#138496',
      borderColor: '#117a8b',
    },
    soft: {
      fontColor: '#0c5460',
      backgroundColor: '#d1ecf1',
      borderColor: '#bee5eb'
    }
  },
  light: {
    fontColor: fontColorDark,
    backgroundColor: '#f8f9fa',
    borderColor: '#f8f9fa',
    hover: {
      fontColor: fontColorDark,
      backgroundColor: '#e2e6ea',
      borderColor: '#dae0e5',
    },
    soft: {
      fontColor: '#818182',
      backgroundColor: '#fefefe',
      borderColor: '#fdfdfe'
    }
  },
  dark: {
    fontColor: fontColorLight,
    backgroundColor: '#343a40',
    borderColor: '#343a40',
    hover: {
      fontColor: fontColorLight,
      backgroundColor: '#23272b',
      borderColor: '#1d2124',
    },
    soft: {
      fontColor: '#1b1e21',
      backgroundColor: '#d6d8d9',
      borderColor: '#c6c8ca'
    }
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.default};
  }  

  html {
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight};
      font-size: ${theme.font.size.default};
  }  

  body {
    margin: 0;
  }
 
`;

