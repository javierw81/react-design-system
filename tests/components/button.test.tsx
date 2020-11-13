import * as React from 'react'
import { mount } from 'enzyme'
import { theme } from '../mocks/theme'
import { ThemeProvider } from 'styled-components'
import { Button } from "../../src"

describe('Button', () => {

  it('Button render is success', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Button>Hello Button</Button>
      </ThemeProvider>,
    );
    expect(wrapper.find('button').length).toBe(1);
  });

  it('Button onClick is success', () => {
    const clickFn = jest.fn();

    const wrapper = mount(
      <ThemeProvider theme={theme}>
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