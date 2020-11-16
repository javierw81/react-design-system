import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from '../mocks/theme'
import { ThemeProvider } from 'styled-components'
import { Container } from "../../src"

describe('Container', () => {

  it('Container render is success', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeMock}>
        <Container>Hello Alert</Container>
        <Container fluid>Hello Alert</Container>
      </ThemeProvider>,
    );
    expect(wrapper.find('section').length).toBe(2);
  });

})