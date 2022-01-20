import { City } from '../types';

interface CityWeatherProps {
  city: City;
}

export default function CityWeather({ city }: CityWeatherProps) {
  return (
    <div>
      {city.id}
    </div>
  );
}
