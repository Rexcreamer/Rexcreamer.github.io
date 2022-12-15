const temperature = document.querySelector("#current-temp").innerHTML;
const windSpeed = parseFloat(document.querySelector("#windspeed").innerText);

if (temperature <= 50 && windSpeed > 3) {
    windChill = 35.74 + (0.6215 * temperature) -
        (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));
    windChill = Math.round(windChill);
    document.querySelector("#windchill").innerHTML = `${windChill} °F`;
}

else {
    document.querySelector("#windchill").innerHTML = "N/A";
}