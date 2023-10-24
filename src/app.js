function updateTime() {
  let vancouverDateElement = document.querySelector("#vancouver-date");
  vancouverDateElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("ddd MMM Do YYYY");

  let vancouverTimeElement = document.querySelector("#vancouver-time");
  vancouverTimeElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("hh:mm:ss A");

  let calgaryDateElement = document.querySelector("#calgary-date");
  calgaryDateElement.innerHTML = moment()
    .tz("America/Edmonton")
    .format("ddd MMM Do YYYY");

  let calgaryTimeElement = document.querySelector("#calgary-time");
  calgaryTimeElement.innerHTML = moment()
    .tz("America/Edmonton")
    .format("hh:mm:ss A");

  let torontoDateElement = document.querySelector("#toronto-date");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("ddd MMM Do YYYY");

  let torontoTimeElement = document.querySelector("#toronto-time");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("hh:mm:ss A");

  let halifaxDateElement = document.querySelector("#halifax-date");
  halifaxDateElement.innerHTML = moment()
    .tz("America/Halifax")
    .format("ddd MMM Do YYYY");

  let halifaxTimeElement = document.querySelector("#halifax-time");
  halifaxTimeElement.innerHTML = moment()
    .tz("America/Halifax")
    .format("hh:mm:ss A");

  let newfoundlandDateElement = document.querySelector("#newfoundland-date");
  newfoundlandDateElement.innerHTML = moment()
    .tz("America/St_Johns")
    .format("ddd MMM Do YYYY");

  let newfoundlandTimeElement = document.querySelector("#newfoundland-time");
  newfoundlandTimeElement.innerHTML = moment()
    .tz("America/St_Johns")
    .format("hh:mm:ss A");

  let romeDateElement = document.querySelector("#rome-date");
  romeDateElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("ddd MMM Do YYYY");

  let romeTimeElement = document.querySelector("#rome-time");
  romeTimeElement.innerHTML = moment().tz("Europe/Rome").format("hh:mm:ss A");

  let tokyoDateElement = document.querySelector("#tokyo-date");
  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("ddd MMM Do YYYY");

  let tokyoTimeElement = document.querySelector("#tokyo-time");
  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("hh:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);

const apiKey = "e9ebt40ac8468b03ff07a7b93c22oc3b";

// Array of cities for which you want to fetch weather data
const cities = [
  "Vancouver",
  "Calgary",
  "Toronto",
  "Halifax",
  "St.Johns",
  "Rome",
  "Tokyo",
];

// Define the API endpoint
const baseUrl = "https://api.shecodes.io/weather/v1/current";

// Function to fetch weather data for a city and display it in a specific spot on the webpage
const fetchAndDisplayWeather = async (city, elementId) => {
  try {
    const url = `${baseUrl}?query=${city}&key=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      // Find the HTML element with the specified class name
      const targetElement = document.querySelector(`.${elementId}`);

      if (targetElement) {
        // Create a new HTML element to display the weather information
        const weatherInfo = document.createElement("p");
        weatherInfo.textContent = `${Math.round(data.temperature.current)}°C`;

        // Append the new element to the target element
        targetElement.appendChild(weatherInfo);
      } else {
        console.error(
          `Target element with class name '${elementId}' not found.`
        );
      }
    } else {
      console.error(`Failed to fetch weather data for ${city}`);
    }
  } catch (error) {
    console.error(error);
  }
};

// Loop through the cities and fetch weather data, specifying the target element for each city
fetchAndDisplayWeather("Vancouver", "vancouver-weather");
fetchAndDisplayWeather("Calgary", "calgary-weather");
fetchAndDisplayWeather("Toronto", "toronto-weather");
fetchAndDisplayWeather("Halifax", "halifax-weather");
fetchAndDisplayWeather("St.Johns", "st-johns-weather");
fetchAndDisplayWeather("Rome", "rome-weather");
fetchAndDisplayWeather("Tokyo", "tokyo-weather");
