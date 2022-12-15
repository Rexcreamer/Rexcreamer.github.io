// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');
const windspeed = document.querySelector('#windspeed');

//Creates an "url" variable that stores the API URL 
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=CasaGrande,AZ,US&units=imperial&appid=64852b5276cd6e2cc74ad12cef7c0123';

//Use fetch() to request the given weather api url
async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            console.log(`Response not OK ${await response.text()}`);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}
apiFetch();

// Display the results
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}°F</strong>`;
    windspeed.textContent = `${weatherData.wind.speed}mph`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDescription.textContent = desc;
    weatherIcon.width = 150;
    weatherIcon.height = 150;
}
        