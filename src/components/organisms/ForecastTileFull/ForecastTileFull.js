import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  Row,
  StyledDate,
  StyledLocation,
  WeatherData,
  Wrapper,
  IconWrapper,
  Time,
  Icon,
} from './ForecastTileFull.styles';
import { Icon as WeatherIcon } from 'components/atoms/WeatherIcon/WeatherIcon';

const ForecastTileFull = ({
  location,
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
      <StyledLocation>{location}</StyledLocation>
      <StyledDate>{date}</StyledDate>
      <Row>
        <IconWrapper>
          <Icon className="sunrise" icon={solid('sun')} />
          <Time>{sunrise}</Time>
        </IconWrapper>

        <WeatherIcon weatherCode={weather_code} />
        <IconWrapper>
          <Icon className="sunset" icon={solid('moon')} />
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

ForecastTileFull.propTypes = {};

export default ForecastTileFull;
