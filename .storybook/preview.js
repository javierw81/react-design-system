import React from "react";
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../src/themes/theme";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(storyFn => <ThemeProvider theme={theme}><GlobalStyle />{storyFn()}</ThemeProvider>)
