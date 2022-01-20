import { useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import axios from 'axios';

import * as CITIES from './cities.json';
import { City } from './types';

// Map openweathermap.org API's weather data to a Weather object
const mapToWeather = (data: any) => ({
  datetime: data.dt_txt,
  temperature: data.main.temp,
  description: data.weather[0].description,
  icon: data.weather[0].icon,
  wind: data.wind.speed,
  humidity: data.main.humidity,
  precipitation: data.rain != undefined ? data.rain['3h'] : 0,
});

export default function App() {
  const [cities, setCities] = useState<City[]>();

  // Fetch forecasts for all cities
  useAsyncEffect(async isActive => {
    const apiCalls = Array.from(CITIES).map(city =>
      axios.get('/forecast', {
        params: {
          id: city.id,
          cnt: 6,
        },
      })
    );
    const responses = await Promise.all(apiCalls);

    // Ensure component is still active/mounted
    if (!isActive()) return;

    // Map each response to a City object
    setCities(
      responses.map((response, index) => ({
        id: CITIES[index].id,
        name: CITIES[index].name,
        forecasts: response.data.list.map(mapToWeather),
      }))
    );

  }, [setCities]);

  if (cities === undefined) {
    return <div>Ladataan kaupunkeja...</div>;
  }
  return (
    <div>
      Säätutka
    </div>
  );
}
