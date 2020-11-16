import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from '../mocks/theme'
import { ThemeProvider } from 'styled-components'
import { Alert } from "../../src"

describe('Alert', () => {

  it('Alert render is success', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeMock}>
        <Alert>Hello Button</Alert>
      </ThemeProvider>,
    );
    expect(wrapper.find('div').length).toBe(1);
  });

})