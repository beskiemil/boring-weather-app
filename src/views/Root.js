import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Button } from 'components/atoms/Button/Button';
const Root = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default Root;
