import { createGlobalStyle } from 'styled-components';

const fontColorLight = '#FFFFFF'
const fontColorDark = '#212529'
const borderSize = '1px'

export const theme = {
  container: {
    default: '700px'
  },
  font: {
    color: fontColorLight,
    size: {
      default: '16px'
    }
  },
  border: {
    size: borderSize,
    radius: '3px',
  },
  primary: {
    fontColor: fontColorLight,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    hover: {
      fontColor: fontColorLight,
      backgroundColor: '#0069d9',
      borderColor: '#00062cc',
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
    }
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