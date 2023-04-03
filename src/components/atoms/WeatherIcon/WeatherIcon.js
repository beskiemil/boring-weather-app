import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export const Icon = styled(FontAwesomeIcon)`
  font-size: 60px;
`;

export const Description = styled.div`
  font-size: 16px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherIcon = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 0:
        return {
          icon: (
            <FontAwesomeIcon
              className="weatherIcon"
              icon={solid('sun')}
              size="4x"
            />
          ),
          description: 'clear sky',
        };
      case 1:
        return { icon: { name: 'sun' }, description: 'mainly clear' };
      case 2:
        return { icon: { name: 'sun' }, description: 'partly cloudy' };
      case 3:
        return { icon: { name: 'sun' }, description: 'overcast' };
      case 45:
        return { icon: { name: 'sun' }, description: 'fog' };
      case 48:
        return { icon: { name: 'sun' }, description: 'depositing rime fog' };
      case 51:
        return { icon: { name: 'sun' }, description: 'light drizzle' };
      case 53:
        return { icon: { name: 'sun' }, description: 'moderate drizzle' };
      case 55:
        return { icon: { name: 'sun' }, description: 'dense drizzle' };
      case 56:
        return { icon: { name: 'sun' }, description: 'light freezing drizzle' };
      case 57:
        return { icon: { name: 'sun' }, description: 'dense freezing drizzle' };
      case 61:
        return { icon: { name: 'sun' }, description: 'light rain' };
      case 63:
        return { icon: { name: 'sun' }, description: 'moderate rain' };
      case 65:
        return { icon: { name: 'sun' }, description: 'heavy rain' };
      case 66:
        return { icon: { name: 'sun' }, description: 'light freezing rain' };
      case 67:
        return { icon: { name: 'sun' }, description: 'heavy freezing rain' };
      case 71:
        return { icon: { name: 'sun' }, description: 'light snow fall' };
      case 73:
        return { icon: { name: 'sun' }, description: 'moderate snow fall' };
      case 75:
        return { icon: { name: 'sun' }, description: 'heavy snow fall' };
      case 77:
        return { icon: { name: 'sun' }, description: 'snow grains' };
      case 80:
        return { icon: { name: 'sun' }, description: 'light rain showers' };
      case 81:
        return { icon: { name: 'sun' }, description: 'moderate rain showers' };
      case 82:
        return { icon: { name: 'sun' }, description: 'violent rain showers' };
      case 85:
        return { icon: { name: 'sun' }, description: 'light snow showers' };
      case 86:
        return { icon: { name: 'sun' }, description: 'heavy snow showers' };
      case 95:
        return { icon: { name: 'sun' }, description: 'thunderstorm' };
      case 96:
        return {
          icon: { name: 'sun' },
          description: 'thunderstorm with slight hail',
        };
      case 99:
        return {
          icon: { name: 'sun' },
          description: 'thunderstorm with heavy hail',
        };

      default:
        return { icon: { name: 'sun' }, description: 'error' };
    }
  };

  return (
    <Wrapper>
      <FontAwesomeIcon
        className="weatherIcon"
        icon={weather().icon.name}
        size="4x"
      />
      <Description>{weather().description}</Description>
    </Wrapper>
  );
};

WeatherIcon.propTypes = {};

export default WeatherIcon;
