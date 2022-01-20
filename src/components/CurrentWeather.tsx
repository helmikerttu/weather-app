import styled from 'styled-components';

import { Box } from '../styles';
import { Weather } from '../types';
import { capitalize, dateTimeToDate } from '../utils';

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 12px 16px;
`;

const City = styled.div`
  font-size: 19px;
  color: #262626;
`;

const Description = styled.div`
  font-size: 13px;
  color: #70757a;
`;

const Day = styled.div`
  font-size: 15px;
  color: #262626;
  margin-top: 30px;
`;

const Time = styled.div`
  font-size: 13px;
  color: #70757a;
`;

const WeatherInfo = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Temperature = styled.div`
  margin: auto 0 auto 4px;
  font-size: 26px;
  color: #262626;
`;

const Field = styled.div`
  font-size: 13px;
  color: #70757a;
  text-align: right;
`;

const Icon = styled.img`
  margin-left: 6px;
`;

interface CurrentWeatherProps {
  location: string;
  weather: Weather;
}

export default function CurrentWeather({ location, weather }: CurrentWeatherProps) {
  const now: Date = new Date();
  return (
    <Container>
      <div>
        <City>{location}</City>
        <Description>{capitalize(weather.description)}</Description>
        <Day>{dateTimeToDate(weather.datetime)}</Day>
        <Time>{`${now.getHours()}:${now.getMinutes()}`}</Time>
      </div>
      <div>
        <WeatherInfo>
          <Icon src={`http://openweathermap.org/img/wn/${weather.icon}.png`} />
          <Temperature>{Math.round(weather.temperature - 272.15)} &deg;C</Temperature>
        </WeatherInfo>
        <Field>Wind: {weather.wind} m/s</Field>
        <Field>Humidity: {weather.humidity} %</Field>
        <Field>Precipitation: {weather.precipitation} mm</Field>
      </div>
    </Container>
  );
}