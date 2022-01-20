import { Weather } from '../types';

interface ForecastProps {
  weather: Weather;
}

export default function Forecast({ weather }: ForecastProps) {
  return (
    <div>{weather.temperature}</div>
  );
}