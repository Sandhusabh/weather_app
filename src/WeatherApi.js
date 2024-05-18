class WeatherApi {
  constructor() {}

  async callApi(req) {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${req.api_key}&q=${req.location}`
      );

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      let data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error:", error);
      return null;
    }
  }

  async getData(location) {
    const api_key = "ffba2972a8024ab081765340240405";
    const req = { api_key, location };
    const weatherData = await this.callApi(req);
    return weatherData;
  }
}

export default WeatherApi;
