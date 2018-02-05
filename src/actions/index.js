import axios from 'axios';

const API_KEY = '1dc63f64495010fa14c55e32f2639709';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
