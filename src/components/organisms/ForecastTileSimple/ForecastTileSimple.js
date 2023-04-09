import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  StyledDate,
  WeatherData,
  Wrapper,
} from './ForecastTileSimple.styles';
import WeatherIcon from 'components/atoms/WeatherIcon/WeatherIcon';

const ForecastTileSimple = ({ hour, humidity, temp, rain, weather_code }) => {
  return (
    <Wrapper>
      <StyledDate>{hour}</StyledDate>
      <Row>
        <WeatherIcon weatherCode={weather_code} size="xl" />
      </Row>

      <Row>
        <WeatherData className="humidity">{humidity}%</WeatherData>
        <WeatherData className="temp">{temp}&deg;C</WeatherData>
        <WeatherData className="rain">{rain}mm</WeatherData>
      </Row>
    </Wrapper>
  );
};

ForecastTileSimple.propTypes = {
  weather_code: PropTypes.number,
  temp: PropTypes.number,
  rain: PropTypes.number,
  humidity: PropTypes.number,
  hour: PropTypes.string,
};

export default ForecastTileSimple;
