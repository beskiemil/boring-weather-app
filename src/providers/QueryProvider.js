import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

export const fetchLocalizations = async (locationString) => {
  const encodedLocationString = encodeURIComponent(locationString);
  const api = `https://api.geoapify.com/v1/geocode/search?text=${encodedLocationString}&apiKey=be8ee48c920d45bdaa580ece0f92e168`;
  const res = await fetch(api);
  return res.json();
};

export const fetchWeatherData = async (coordinates) => {
  const lat = coordinates.lat;
  const lon = coordinates.lon;
  const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,rain,weathercode&daily=weathercode,sunrise,sunset,rain_sum&forecast_days=1&timezone=auto`;
  const res = await fetch(api);
  return res.json();
};
