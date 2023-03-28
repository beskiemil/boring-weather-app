import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLocation = styled.h1`
  margin-bottom: 0;
`;

export const StyledDate = styled.h3`
  font-weight: normal;
  font-size: 14px;
`;

export const WeatherIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
`;

export const WeatherData = styled.h4`
  font-weight: normal;
  position: relative;
  &.temp {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: calc(1.12 * 16px);
  }
  &.humidity::after {
    font-size: 10px;
    position: absolute;
    content: 'humidity:';
    top: -13px;
    left: 0;
  }
  &.rain::after {
    font-size: 10px;
    position: absolute;
    content: 'rain:';
    top: -13px;
    left: 0;
  }
`;

export const Row = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
