import React, { useState, useEffect, useContext } from 'react';
import ForecastTile from 'components/organisms/ForecastTile/ForecastTile';
import { data } from 'data/data';
import { fetchWeatherData } from 'providers/QueryProvider';
import { fetchLocalizations } from 'providers/QueryProvider';
import { useQuery } from 'react-query';
import Box from 'components/molecules/Box/Box';
import { useLocation } from 'react-router-dom';

const Forecast = () => {
  const { state: locationQuery } = useLocation();
  const {
    data: locationData,
    status: locationStatus,
    error: locationError,
  } = useQuery(['localizations', locationQuery], () =>
    fetchLocalizations(locationQuery)
  );
  const [localization, setLocalization] = useState(locationData?.features[0]);
  const lat = localization?.properties.lat.toFixed(2);
  const lon = localization?.properties.lon.toFixed(2);

  const {
    data: weatherData,
    status: weatherStatus,
    error: weatherError,
  } = useQuery(
    ['weatherData', { lat, lon }],
    () => fetchWeatherData({ lat, lon }),
    {
      enabled: !!lat && !!lon,
    }
  );

  if (
    locationStatus === 'loading' ||
    weatherStatus === 'idle' ||
    weatherStatus === 'loading'
  )
    return (
      <Box>
        <div>loading. . . </div>
      </Box>
    );

  if (locationStatus === 'error')
    return (
      <Box>
        <div>Error: {locationError.message}</div>
      </Box>
    );
  if (weatherStatus === 'error')
    return (
      <Box>
        <div>Error: {weatherError.message}</div>
      </Box>
    );

  return (
    <Box>
      <ForecastTile
        location={localization.properties.address_line1}
        date="23 May 2012"
        weather_code="23"
        temp={weatherData.hourly.temperature_2m[0]}
        rain="0.2"
        humidity="87"
      />
    </Box>
  );
};

export default Forecast;
