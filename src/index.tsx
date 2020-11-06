import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';


const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto, Arial, sans-serif';
    background-color: #262A59;
    color: #fff;
  }
`;

ReactDOM.render(<><GlobalStyle /> <App /></>, document.getElementById('root'));