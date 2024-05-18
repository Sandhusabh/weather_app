class DisplayLocation {
  constructor(location) {
    this.location = location;
  }

  display() {
    const location = this.location;

    // Create card container
    const card = document.createElement("div");
    if (location.obj_index === 4) {
      card.className = "mainCity";
    } else {
      card.className = "card";
    }

    // Create elements for location information
    const cityName = document.createElement("div");
    cityName.className = "city-name";
    cityName.innerText = location.city_name;

    const temperature = document.createElement("div");
    temperature.className = "temperature";
    temperature.innerText = `${location.temp_c}°C`;

    const lastUpdated = document.createElement("div");
    lastUpdated.className = "last-updated";
    lastUpdated.innerText = `Last Updated: ${location.last_updated}`;

    // Append elements to card container
    card.appendChild(cityName);
    card.appendChild(temperature);
    card.appendChild(lastUpdated);

    return card; // Return the card element
  }
}

export default DisplayLocation; // Export the DisplayLocation class
