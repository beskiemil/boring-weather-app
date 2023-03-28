import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme.js';
import GlobalStyle from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/templates/MainTemplate';
import Location from './Location';
import Forecast from './Forecast';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'providers/QueryProvider';
import { ReactQueryDevtools } from 'react-query/devtools';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Location />} />
              <Route path="/forecast" element={<Forecast />} />
            </Routes>

            <ReactQueryDevtools />
          </QueryClientProvider>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
