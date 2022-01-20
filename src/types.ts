export type Weather = {
  datetime: string;
  temperature: number;
  description: string;
  icon: string;
  wind: number;
  humidity: number;
  precipitation?: number;
}

export type City = {
  id: number;
  name: string;
  forecasts: Weather[];
}
