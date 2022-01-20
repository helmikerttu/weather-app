# Säätutka

This project is implemented for Etteplan MORE's job opening and it presents the weather of Etteplan's office locations.
Säätutka displays the current weather and weather forecast every three hours.


## Installation and running 

This project uses [OpenWeather API](https://openweathermap.org/) for retrieving the weather information.
Signing-up is required to acquire an API key.
The API key must be provided as an `API_KEY` environment variable,
for example by creating a `.env` file with a `REACT_APP_API_KEY=<your_api_key>` content.


To run this program, simply run
```
npm install
npm start
```

To add or delete cities, edit the `src/cities.json` file.
Each city has its own `id` parameter,
which can be found from [OpenWeatherMap](https://openweathermap.org/find).
Cities also have a `name` parameter to allow custom names such as `Jyväskylä` instead of `Jyvaskyla`.


## What it looks like

![web](https://i.imgur.com/4vk5S1t.png)

![mobile](https://i.imgur.com/8FosmKN.png)