import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

import App from './App';


axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

axios.interceptors.request.use(config => {
  if (config.params === undefined) {
    config.params = {};
  }
  config.params.appid = process.env.REACT_APP_API_KEY;
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
