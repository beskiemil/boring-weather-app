import React from 'react';
import { fetchWeatherData } from 'providers/QueryProvider';
import { fetchLocalizations } from 'providers/QueryProvider';
import { useQuery } from 'react-query';
import Box from 'components/molecules/Box/Box';
import { useLocation } from 'react-router-dom';
import ForecastTileFull from 'components/organisms/ForecastTileFull/ForecastTileFull';
import ForecastTileSimple from 'components/organisms/ForecastTileSimple/ForecastTileSimple';

const ForecastPage = () => {
  const { state: locationQuery } = useLocation();
  const {
    data: locationData,
    status: locationStatus,
    error: locationError,
  } = useQuery(['localizations', locationQuery], () =>
    fetchLocalizations(locationQuery)
  );
  const lat = locationData?.results[0].lat;
  const lon = locationData?.results[0].lon;

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

  const actualDate = new Date();
  const actualDateString =
    actualDate.getDate() +
    ' ' +
    actualDate.getMonth() +
    ' ' +
    actualDate.getFullYear();
  const actualHour = actualDate.getHours();
  //const actualTime = actualHour + ':' + actualDate.getMinutes();

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
    <>
      {weatherData.hourly.time.map((time, i) => {
        return i === actualHour ? (
          <Box>
            <ForecastTileFull
              key={i}
              location={locationData.results[0].address_line1}
              date={actualDateString}
              weather_code={weatherData.hourly.weathercode[i]}
              temp={weatherData.hourly.temperature_2m[i]}
              rain={weatherData.hourly.rain[i]}
              humidity={weatherData.hourly.relativehumidity_2m[i]}
              sunrise={weatherData.daily.sunrise[0].slice(11, 16)}
              sunset={weatherData.daily.sunset[0].slice(11, 16)}
            />
          </Box>
        ) : i < actualHour && actualHour - i < 3 ? (
          <Box>
            <ForecastTileSimple
              key={i}
              hour={time.slice(11, 16)}
              temp={weatherData.hourly.temperature_2m[i]}
              rain={weatherData.hourly.rain[i]}
              humidity={weatherData.hourly.relativehumidity_2m[i]}
              weather_code={weatherData.hourly.weathercode[i]}
            />
          </Box>
        ) : i > actualHour && i - actualHour < 3 ? (
          <Box>
            <ForecastTileSimple
              key={i}
              hour={time.slice(11, 16)}
              temp={weatherData.hourly.temperature_2m[i]}
              rain={weatherData.hourly.rain[i]}
              humidity={weatherData.hourly.relativehumidity_2m[i]}
              weather_code={weatherData.hourly.weathercode[i]}
            />
          </Box>
        ) : (
          <span></span>
        );
      })}
    </>
  );

  //if (i < actualHour)
  //<ForecastTileSimple />;

  //if (i > actualHour)
  //<ForecastTileSimple />;
};

export default ForecastPage;

// {weatherData.hourly.time.map((i) => {
//   i === actualHour ? (
//     <Box>
//       <ForecastTileFull
//         location={locationData.results[0].address_line1}
//         date={actualDateString}
//         weather_code={weatherData.hourly.weathercode[i]}
//         temp={weatherData.hourly.temperature_2m[i]}
//         rain={weatherData.hourly.rain[i]}
//         humidity={weatherData.hourly.relativehumidity_2m[i]}
//       />
//     </Box>
//   ) : (
//     <ForecastTileSimple
//       hour={actualTime}
//       temp={weatherData.hourly.temperature_2m[i]}
//       rain={weatherData.hourly.rain[i]}
//       humidity={weatherData.hourly.relativehumidity_2m[i]}
//     />
//   );
// })}
