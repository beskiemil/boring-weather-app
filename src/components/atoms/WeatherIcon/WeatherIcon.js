import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Description = styled.div`
  font-size: 16px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherIcon = ({ weatherCode }) => {
  const [icon, setIcon] = useState({
    icon: 'fa-solid fa-sun',
    description: 'default',
  });

  useEffect(() => {
    console.log(weatherCode);
    switch (weatherCode) {
      case 0:
        setIcon({
          icon: 'fa-solid fa-sun',
          description: 'clear sky',
        });
        break;
      case 1:
        setIcon({
          icon: 'fa-solid fa-cloud-sun',
          description: 'mainly clear',
        });
        break;
      case 2:
        setIcon({
          icon: 'fa-solid fa-cloud',
          description: 'partly cloudy',
        });
        break;
      case 3:
        setIcon({
          icon: 'fa-solid fa-smog',
          description: 'overcast',
        });
        break;
      case 45:
        setIcon({
          icon: 'fa-solid fa-water',
          description: 'fog',
        });
        break;
      case 48:
        setIcon({
          icon: 'fa-solid fa-water',
          description: 'depositing rime fog',
        });
        break;
      case 51:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'light drizzle',
        });
        break;
      case 53:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'moderate drizzle',
        });
        break;
      case 55:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'dense drizzle',
        });
        break;
      case 56:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'light freezing drizzle',
        });
        break;
      case 57:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'dense freezing drizzle',
        });
        break;
      case 61:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'light rain',
        });
        break;
      case 63:
        setIcon({
          icon: 'fa-solid fa-cloud-showers-heavy',
          description: 'moderate rain',
        });
        break;
      case 65:
        setIcon({
          icon: 'fa-solid fa-cloud-showers-heavy',
          description: 'heavy rain',
        });
        break;
      case 66:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'light freezing rain',
        });
        break;
      case 67:
        setIcon({
          icon: 'fa-solid fa-cloud-water',
          description: 'heavy freezing rain',
        });
        break;
      case 71:
        setIcon({
          icon: 'fa-solid fa-snowflake',
          description: 'light snow fall',
        });
        break;
      case 73:
        setIcon({
          icon: 'fa-solid fa-snowflake',
          description: 'moderate snow fall',
        });
        break;
      case 75:
        setIcon({
          icon: 'fa-solid fa-snowflake',
          description: 'heavy snow fall',
        });
        break;
      case 77:
        setIcon({
          icon: 'fa-solid fa-cloud-meatball',
          description: 'snow grains',
        });
        break;
      case 80:
        setIcon({
          icon: 'fa-solid fa-cloud-sun-rain',
          description: 'light rain showers',
        });
        break;
      case 81:
        setIcon({
          icon: 'fa-solid fa-cloud-sun-rain',
          description: 'moderate rain showers',
        });
        break;
      case 82:
        setIcon({
          icon: 'fa-solid fa-cloud-sun-rain',
          description: 'violent rain showers',
        });
        break;
      case 85:
        setIcon({
          icon: 'fa-solid fa-snowflake',
          description: 'light snow showers',
        });
        break;
      case 86:
        setIcon({
          icon: 'fa-solid fa-snowflake',
          description: 'heavy snow showers',
        });
        break;
      case 95:
        setIcon({
          icon: 'fa-solid fa-cloud-bolt',
          description: 'thunderstorm',
        });
        break;
      case 96:
        setIcon({
          icon: 'fa-solid fa-cloud-bolt',
          description: 'thunderstorm with slight hail',
        });
        break;
      case 99:
        setIcon({
          icon: 'fa-solid fa-cloud-meatball',
          description: 'thunderstorm with heavy hail',
        });
        break;

      default:
        setIcon({
          icon: 'fa-solid fa-exclamation',
          description: 'error',
        });
        break;
    }
  }, [weatherCode]);

  return (
    <Wrapper>
      <FontAwesomeIcon icon={icon.icon} size="4x" />
      <Description>{icon.description}</Description>
    </Wrapper>
  );
};

WeatherIcon.propTypes = {};

export default WeatherIcon;
