import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from '../mocks/theme'
import { ThemeProvider } from 'styled-components'
import { Alert } from "../../src"

describe('Alert', () => {

  it('Alert render is success', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeMock}>
        <Alert>Hello Alert</Alert>
        <Alert primary>Hello Alert</Alert>
        <Alert secondary>Hello Alert</Alert>
        <Alert success>Hello Alert</Alert>
        <Alert danger>Hello Alert</Alert>
        <Alert warning>Hello Alert</Alert>
        <Alert light>Hello Alert</Alert>
        <Alert dark>Hello Alert</Alert>
      </ThemeProvider>,
    );
    expect(wrapper.find('div').length).toBe(8);
  });

})