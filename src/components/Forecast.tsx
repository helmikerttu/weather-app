import styled from 'styled-components';

import { Box } from '../styles';
import { Weather } from '../types';
import { dateTimeToTime } from '../utils';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

const ForecastBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 12px 6px 10px 6px;
`;

const Time = styled.div`
  font-size: 13px;
  color: #70757a;
  text-align: center;
`;

const Temperature = styled.div`
  font-size: 15px;
  color: #70757a;
  text-align: center;
`;

const ForecastInfoBox = styled(Box)`
  background-color: #e5f6fd;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const ForecastInfo = styled.div`
  text-align: center;
  font-size: 10px;
  color: #70757a;
`;

interface ForecastProps {
  weather: Weather;
}

export default function Forecast({ weather }: ForecastProps) {
  return (
    <Container>
      <ForecastBox>
        <Time>{dateTimeToTime(weather.datetime)}</Time>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} />
        <Temperature>{Math.round(weather.temperature - 272.15)} &deg;C</Temperature>
      </ForecastBox>
      <ForecastInfoBox>
        <ForecastInfo>{weather.wind} m/s</ForecastInfo>
        <ForecastInfo>{weather.humidity} %</ForecastInfo>
        <ForecastInfo>{weather.precipitation} mm</ForecastInfo>
      </ForecastInfoBox>
    </Container>
  );
}