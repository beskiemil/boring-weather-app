import React from 'react';
import { Wrapper, Navbar, Main } from './ForecastTemplate.styles';
import { Outlet } from 'react-router-dom';
import SearchBar from 'components/organisms/SearchBar/SearchBar';

export const ForecastTemplate = () => {
  return (
    <Wrapper>
      <Navbar>
        <SearchBar />
      </Navbar>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default ForecastTemplate;
