import React, { useState } from 'react';
import Input from 'components/atoms/Input/Input';
import { Wrapper, Icon } from './SearchBar.styles.js';
import { Button } from 'components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import Box from 'components/molecules/Box/Box.js';

export const SearchBar = () => {
  const [locationInputValue, setLocationInputValue] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/forecast', { state: locationInputValue });
  };

  const handleInputChange = (e) => {
    setLocationInputValue(e.target.value);
  };

  return (
    <Box>
      <Wrapper as="form" onSubmit={handleSubmit}>
        <Icon icon={'fa-solid fa-location-dot'} size="xl" color="#737C8E" />
        <Input
          placeholder="Enter your location"
          value={locationInputValue}
          onChange={handleInputChange}
          name="location"
          id="location"
          type="text"
        />
        <Button type="submit">Search</Button>
      </Wrapper>
    </Box>
  );
};

export default SearchBar;
