class WeatherService {
  apiKey = '75001152a28d401194d185718242110';

  async getWeather(city: string) {
   console.log(this.apiKey);
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }
}

const weatherService = new WeatherService();

export  {weatherService}