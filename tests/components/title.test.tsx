import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from '../mocks/theme'
import { ThemeProvider } from 'styled-components'
import { Title, Subtitle } from "../../src"

describe('Title', () => {

  it('Title render is success', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeMock}>
        <Title>Hello Title</Title>
        <Subtitle>Hello Subtitle</Subtitle>
      </ThemeProvider>,
    );
    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('h2').length).toBe(1)
  })

})