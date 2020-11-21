import * as React from 'react'
import { mount } from 'enzyme'
import { themeMock } from '../mocks/theme'
import { ThemeProvider } from 'styled-components'
import { Field } from "../../src"

describe('Field', () => {

  it('Field render is success', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeMock}>
        <Field>
          <input type="text" placeholder=" " />
          <label>Name</label>
        </Field>

        <Field>
          <select>
            <option value=""></option>
            <option value="1">Alabama</option>
            <option value="2">Boston</option>
            <option value="3">Ohaio</option>
            <option value="4">New York</option>
            <option value="5">Washington</option>
          </select>
          <label>Countries</label>
        </Field>

        <Field>
          <textarea placeholder=" " />
          <label>Comments</label>
        </Field>

      </ThemeProvider>,
    );
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('textarea').length).toBe(1);
    expect(wrapper.find('label').length).toBe(4);
  });

})