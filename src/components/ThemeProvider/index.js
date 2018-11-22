import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import 'sanitize.css';

import theme from './theme';
import Box from '../Box';
import '../../web-font';

injectGlobal`
  body {
    font-family: ${theme.font};
  }
`;

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box f={[10, 14, 16]} {...props} />
  </ThemeProvider>
);
