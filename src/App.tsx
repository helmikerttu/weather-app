import { useCallback, useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import axios from 'axios';
import styled from 'styled-components';

import * as CITIES from './cities.json';
import { Box } from './styles';
import { City } from './types';

const Container = styled.div`
  background-color: #f8f9fa;
  padding: 28px;
  font-family: 'Arial';
  margin: auto;
  max-width: fit-content;
`;

const Header = styled.div`
  font-family: 'Arial';
  background-color: #ffffff;
  padding: 16px;
  font-size: 23px;
  color: #262626;
  text-align: center;
`;

const Select = styled.select`
  border: none; 
  width: 100%;
  padding: 6px 0;
  font-size: 13px;
  color: #262626;
`;

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
  const [selectedCity, setSelectedCity] = useState<City>();

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

  const onSelectCity = useCallback((id: number) => {
    setSelectedCity(cities?.find(city => city.id === id));
  }, [cities, setSelectedCity]);

  if (cities === undefined) {
    return <Header>Ladataan kaupunkeja...</Header>;
  }
  return (
    <div>
      <Header>Säätutka</Header>
      <Container>
        <Box>
          <Select
            value={selectedCity?.id ?? 0}
            onChange={event => onSelectCity(parseInt(event.target.value))}
          >
            <option value={0}>Kaikki kaupungit</option>
            {cities.map(city => 
              <option key={city.id} value={city.id}>{city.name}</option>
            )}
          </Select>
        </Box>
      </Container>
    </div>
  );
}
