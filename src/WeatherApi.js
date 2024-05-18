class WeatherApi {
  constructor() {}

  async callApi(req) {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${req.nothing}&q=${req.location}`
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
    const nothing = "ffba2972a8024ab081765340240405";
    const req = { nothing, location };
    const weatherData = await this.callApi(req);
    return weatherData;
  }
}

export default WeatherApi;
