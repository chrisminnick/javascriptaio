import dotenv from 'dotenv';
dotenv.config();

export function getCurrentWeather(city) {
  const apiKey = process.env.API_KEY;
  const apiHost = process.env.API_HOST;
  const apiPath = process.env.API_PATH;
  const apiUrl = `https://${apiHost}${apiPath}?q=${city}&appid=${apiKey}`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return {
        data: data,
      };
    });
}
getCurrentWeather('London').then((weather) => {
  console.log(weather);
});
