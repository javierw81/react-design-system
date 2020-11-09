import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Button from "./Components/Button"
import { theme } from "./themes/theme"
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center; 
`
// Create a Container component that'll render a <section> tag with some styles
const Container = styled.section`
  padding: 4em; 
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>
          Hello World!
        </Title>
        <Button primary clickFunction={() => alert("Hello primary!!")}> click me!</Button>
        <Button secondary clickFunction={() => alert("Hello secondary!!")}> click me!</Button>
      </Container>
    </ThemeProvider>
  );
}
export default App;
