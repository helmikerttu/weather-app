import styled from 'styled-components';

import { City } from '../types';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const ForecastContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

interface CityWeatherProps {
  city: City;
}

export default function CityWeather({ city }: CityWeatherProps) {
  const [currentWeather, ...forecasts] = city.forecasts;

  return (
    <div>
      <CurrentWeather location={city.name} weather={currentWeather} />
      <ForecastContainer>
        {forecasts.map(forecast => <Forecast key={forecast.datetime} weather={forecast} />)}
      </ForecastContainer>
    </div>
  );
}
