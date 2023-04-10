import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  StyledDate,
  StyledLocation,
  StyledHour,
  WeatherData,
  Wrapper,
  IconWrapper,
  Time,
  Icon,
} from './ForecastTileFull.styles';
import { WeatherIcon } from 'components/atoms/WeatherIcon/WeatherIcon';

const ForecastTileFull = ({
  location,
  hour,
  date,
  weather_code,
  temp,
  rain,
  humidity,
  sunset,
  sunrise,
}) => {
  return (
    <Wrapper>
      <StyledHour>{hour}</StyledHour>
      <StyledLocation>{location}</StyledLocation>
      <StyledDate>{date}</StyledDate>
      <Row>
        <IconWrapper>
          <Icon className="sunrise" icon={'fa-solid fa-sun'} />
          <Time>{sunrise}</Time>
        </IconWrapper>
        <WeatherIcon weatherCode={weather_code} />
        <IconWrapper>
          <Icon className="sunset" icon={'fa-solid fa-moon'} />
          <Time>{sunset}</Time>
        </IconWrapper>
      </Row>

      <Row>
        <WeatherData className="humidity">{humidity}%</WeatherData>
        <WeatherData className="temp">{temp}&deg;C</WeatherData>
        <WeatherData className="rain">{rain}mm</WeatherData>
      </Row>
    </Wrapper>
  );
};

ForecastTileFull.propTypes = {
  location: PropTypes.string,
  date: PropTypes.string,
  weather_code: PropTypes.number,
  temp: PropTypes.number,
  rain: PropTypes.number,
  humidity: PropTypes.number,
  sunset: PropTypes.string,
  sunrise: PropTypes.string,
};

export default ForecastTileFull;
