import React from 'react';
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center; 
`;

// Create a Container component that'll render a <section> tag with some styles
const Container = styled.section`
  padding: 4em; 
`;

function App() {
    return (
        <Container>
        <Title>
          Hello World!
        </Title>
      </Container>
    );
}
export default App;
