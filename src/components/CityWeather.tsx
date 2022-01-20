import { City } from '../types';
import CurrentWeather from './CurrentWeather';

interface CityWeatherProps {
  city: City;
}

export default function CityWeather({ city }: CityWeatherProps) {
  const [currentWeather, ...forecasts] = city.forecasts;

  return (
    <div>
      <CurrentWeather location={city.name} weather={currentWeather} />
    </div>
  );
}
