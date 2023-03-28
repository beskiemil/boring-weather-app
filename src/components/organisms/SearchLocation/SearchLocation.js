import React, { useState } from 'react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Input from 'components/atoms/Input/Input';
import { Wrapper, Icon } from './SearchLocation.styles';
import { Button } from 'components/atoms/Button/Button';

import { useNavigate } from 'react-router-dom';

export const SearchLocation = () => {
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
    <Wrapper as="form" onSubmit={handleSubmit}>
      <Icon icon={solid('location-dot')} size="xl" color="#737C8E" />
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
  );
};

export default SearchLocation;
