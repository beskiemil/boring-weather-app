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
} from './ForecastTileSimple.styles';

const ForecastTileSimple = ({ hour, humidity, temp, rain }) => {
  return (
    <Wrapper>
      <StyledDate>{hour}</StyledDate>
      <Row>
        <WeatherIcon icon={solid('sun')} size="xl" />
      </Row>

      <Row>
        <WeatherData className="humidity">{humidity}%</WeatherData>
        <WeatherData className="temp">{temp}&deg;C</WeatherData>
        <WeatherData className="rain">{rain}mm</WeatherData>
      </Row>
    </Wrapper>
  );
};

ForecastTileSimple.propTypes = {};

export default ForecastTileSimple;
