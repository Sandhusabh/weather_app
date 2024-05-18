import WeatherApi from "./WeatherApi";
import DisplayLocation from "./DisplayLocation";
import "./style.css";

class WeatherApp {
  constructor() {
    this.locations = ["Abbotsford, BC", "Surrey", "Surrey", "Surrey", "Makhu"];
  }

  addLocation(location) {
    if (!this.locations.includes(location)) {
      this.locations.shift() 
      this.locations.push(location);
      console.log(`Location '${location}' added.`);
    } else {
      console.log("Location already exists in the list.");
    }
  }

  async create() {
    await this.render();
    this.processInput();
  }

  async render() {
    let locData = await this.getWeatherData();
    this.displayData(locData);
  }

  displayData(weatherData) {
    const contentArea = document.getElementById("content");
    const mainCityContainer = document.getElementById("mainCityContainer");
    contentArea.innerText = "";
    mainCityContainer.innerText = "";
    weatherData.forEach((Obj) => {
      const loc = new DisplayLocation(Obj);
      if (Obj.obj_index === 4) {
        mainCityContainer.appendChild(loc.display());
      } else {
        contentArea.appendChild(loc.display());
      }
    });
  }

  getUserInput() {
    const locationField = document.getElementById("location");
    return locationField.value;
  }

  processInput() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", async (e) => {
      let userInput = this.getUserInput();
      this.addLocation(userInput);
      this.render();
    });
  }

  async getWeatherData() {
    let locations = this.locations;
    let data = [];
    for (const loc of locations) {
      let locData = await this.addToWeatherData(loc);
      if (locData) {
        data.push(locData);
      }
    }
    return data;
  }

  async addToWeatherData(loc) {
    let locWeatherData = await this.getWeatherResults(loc);
    if (locWeatherData) {
      let cityWeatherObj = this.createCityWeatherObj(locWeatherData, loc);
      return cityWeatherObj;
    }
  }

  createCityWeatherObj(data, loc) {
    let cityObj = {
      city_name: data.location.name,
      city_region: data.location.region,
      local_time: data.location.localtime,
      country: data.location.country,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      condition: data.current.condition,
      last_updated: data.current.last_updated,
      obj_index: this.getIndex(loc),
    };
    return cityObj;
  }

  getIndex(city) {
    return this.locations.indexOf(city);
  }

  async getWeatherResults(location) {
    const api = new WeatherApi();
    return await api.getData(location);
  }
}

const weatherApp = new WeatherApp();
weatherApp.create();
