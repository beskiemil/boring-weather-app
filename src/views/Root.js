import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme.js';
import GlobalStyle from 'assets/styles/GlobalStyle';
import ForecastTemplate from 'components/templates/ForecastTemplate';
import HomePage from './HomePage';
import ForecastPage from './ForecastPage';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'providers/QueryProvider';
import { ReactQueryDevtools } from 'react-query/devtools';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faCloud,
  faSmog,
  faWater,
  faCloudSun,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudBolt,
  faSnowflake,
  faCloudMeatball,
  faCloudSunRain,
  faExclamation,
  faLocationDot,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

const Root = () => {
  library.add(
    faSun,
    faMoon,
    faCloud,
    faSmog,
    faCloudSun,
    faWater,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudBolt,
    faSnowflake,
    faCloudMeatball,
    faCloudSunRain,
    faExclamation,
    faLocationDot
  );
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<ForecastTemplate />}>
              <Route path="/forecast" element={<ForecastPage />} />
            </Route>
          </Routes>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
