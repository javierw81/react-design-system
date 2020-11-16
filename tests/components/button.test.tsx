import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from '../mocks/theme'
import { ThemeProvider } from 'styled-components'
import { Button } from "../../src"

describe('Button', () => {

  it('Button render is success', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeMock}>
        <Button>Hello Button</Button>
        <Button primary>Hello Button</Button>
        <Button secondary>Hello Button</Button>
        <Button success>Hello Button</Button>
        <Button danger>Hello Button</Button>
        <Button warning>Hello Button</Button>
        <Button light>Hello Button</Button>
        <Button dark>Hello Button</Button>
      </ThemeProvider>,
    );
    expect(wrapper.find('button').length).toBe(8);
  });

  it('Button onClick is success', () => {
    const clickFn = jest.fn();

    const wrapper = mount(
      <ThemeProvider theme={themeMock}>
        <Button onClick={clickFn} >Hello Button</Button>
      </ThemeProvider>,
    )

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(clickFn).toHaveBeenCalled();
  })
})