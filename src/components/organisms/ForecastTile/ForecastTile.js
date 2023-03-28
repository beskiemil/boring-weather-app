import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  Row,
  StyledDate,
  WeatherIcon,
  StyledLocation,
  WeatherData,
  Wrapper,
} from './ForecastTile.styles';
import Box from 'components/molecules/Box/Box';

const ForecastTile = ({
  location,
  date,
  weather_code,
  temp,
  rain,
  humidity,
}) => {
  return (
    <Wrapper>
      <StyledLocation>{location}</StyledLocation>
      <StyledDate>{date}</StyledDate>
      <Row>
        <FontAwesomeIcon icon={solid('sun')} size="sm" />
        <WeatherIcon icon={solid('sun')} size="xl" />
        <FontAwesomeIcon icon={solid('moon')} size="sm" />
      </Row>

      <Row>
        <WeatherData className="humidity">{humidity}%</WeatherData>
        <WeatherData className="temp">{temp}&deg;C</WeatherData>
        <WeatherData className="rain">{rain}mm</WeatherData>
      </Row>
    </Wrapper>
  );
};

ForecastTile.propTypes = {};

export default ForecastTile;
