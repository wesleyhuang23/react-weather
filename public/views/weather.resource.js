import axios from 'axios';

export function getWeather(city){
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1aff477dad7b479ba5216139ef765d1a`);
}
