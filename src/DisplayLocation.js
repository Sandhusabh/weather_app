import windImgSrc from './images/wind.png';
import humidityImgSrc from './images/humidity.png'; 
import sunnySrc from './images/sunny.jpg';
import rainSrc from './images/monsoon.jpg';

class DisplayLocation {
  constructor(location, tempUnit) {
    this.location = location;
    this.tempUnit = tempUnit;
  }

  display() {
    const location = this.location;
    const tempUnit = this.tempUnit;
    
    // Determine the temperature based on the unit
    const temp = tempUnit === 'F' ? location.temp_f : location.temp_c;

    // Create card container
    const card = document.createElement("div");
    card.className = "card";

    if (location.obj_index === 3) {
      const container = document.querySelector('.container')
      let background = sunnySrc
      let cond = location.condition.text
      if(cond.includes('rain')){
         background = rainSrc
      }
        container.style.backgroundImage = `url('${background}')`;
 

      const cityName = document.querySelector(".name");
      cityName.innerText = location.city_name;

      const tempNo = document.querySelector(".tempNo");
      tempNo.innerText = `${Math.round(temp)}`;

      const degree = document.querySelector(".degree");
      degree.innerText = `°${tempUnit}`;

      const condition = document.querySelector(".condition");
      condition.innerText = `${location.condition.text}`;

      const wind = document.querySelector(".mainWind");
      wind.innerText = `${location.wind_mph} mph`;

      const humidity = document.querySelector(".mainHumidity");
      humidity.innerText = `${location.humidity} %`;

      const rain = document.querySelector(".mainRain");
      rain.innerText = `${location.precip} %`;

      return;
    } else {
      // Create elements for location information
      const cityName = document.createElement("div");
      cityName.className = "city-name";
      cityName.innerText = location.city_name;

      const temperature = document.createElement("div");
      temperature.className = "temperature";
      temperature.innerText = `${Math.round(temp)}°`;

      const data = document.createElement("div");
      data.className = "city-data";

      const cond = document.createElement("div");
      cond.className = "cond";

      const condText = document.createElement("span");
      condText.innerText = `${location.condition.text}`;

      const condImg = document.createElement("img");
      condImg.src = `${location.condition.icon}`;
      cond.appendChild(condImg);
      cond.appendChild(condText);

      const wind = document.createElement("div");
      wind.className = "wind";

      const windText = document.createElement("span");
      windText.innerText = `${location.wind_mph} mph`;

      const windImg = document.createElement("img");
      windImg.src = windImgSrc
      wind.appendChild(windImg);
      wind.appendChild(windText);

      const humidity = document.createElement("div");
      humidity.className = "humidity";

      const humidityText = document.createElement("span");
      humidityText.innerText = `${location.humidity} %`;

      const humidityImg = document.createElement("img");
      humidityImg.src = humidityImgSrc
      humidity.appendChild(humidityImg);
      humidity.appendChild(humidityText);

      data.appendChild(cond);
      data.appendChild(wind);
      data.appendChild(humidity);

      // Append elements to card container
      card.appendChild(cityName);

      const cityContainer = document.createElement("div");
      cityContainer.className = "cityContainer";
      cityContainer.appendChild(temperature);
      cityContainer.appendChild(data);

      card.appendChild(cityContainer);
    }

    return card; // Return the card element
  }
}

export default DisplayLocation; // Export the DisplayLocation class
