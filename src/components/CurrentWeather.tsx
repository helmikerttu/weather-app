import { Weather } from '../types';

interface CurrentWeatherProps {
  location: string;
  weather: Weather;
}

export default function CurrentWeather({ location, weather }: CurrentWeatherProps) {
  return (
    <div>
      {location}
    </div>
  );
}