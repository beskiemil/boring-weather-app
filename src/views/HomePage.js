import React from 'react';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Box from 'components/molecules/Box/Box';
import { Wrapper } from './HomePage.styles';

const HomePage = () => {
  return (
    <Wrapper>
      <Box>
        <SearchBar />
      </Box>
    </Wrapper>
  );
};

export default HomePage;
