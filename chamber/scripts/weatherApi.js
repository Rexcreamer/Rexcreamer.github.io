const apiURL = `https://api.openweathermap.org/data/2.5/weather?Tucon,AZ,US&appid=7085b59d4a786d720061217efd0eaa85"&units=imperial`;
function showWeather(obj){
    let currenttemp = document.querySelector('#current-temp');
    let iconpath = document.querySelector('#icon-src');
    let weathericon = document.querySelector('#weathericon');
    let figurecaption = document.querySelector('#figcaption');
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = Math.round(obj.main.temp);
    iconpath.textContent = iconURL;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt", obj.weather[0].description);
    figurecaption.textContent = obj.weather[0].main;
}
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
  });

  // Populate the DOM stuff
  tempobj.textContent = temp;
  windspeedobj.textContent = windspeed;
  windchillobj.innerHTML = windchillmsg;

  function setwindchill(temp, windspeed){
    // References to DOM elements
    let tempobj = document.querySelector("#current-temp");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");
    
    // Calculate windspeed if necessary
    let windchillmsg = "N/A";
    
    if (temp <= 50 && windspeed > 3){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}&deg;`;
    }
  
    setwindchill(39, 10);
        if (weatherId >= 200 && weatherId < 531){ 
            document.querySelector('#weathericon').setAttribute('src', 'imgs/rainy.png');
        }
        else if (weatherId >= 600 && weatherId < 622){
            document.querySelector('#weathericon').setAttribute('src', 'imgs/snowy.png');
        }
        else if (weatherId >= 701 && weatherId < 781){
            document.querySelector('#weathericon').setAttribute('src', 'imgs/fog.png');
            
        }
        else if (weatherId >= 801 && weatherId < 805){
            document.querySelector('#weathericon').setAttribute('src', 'imgs/cloudy.png');
        }
        else if (weatherId == 800){
            document.querySelector('#weathericon').setAttribute('src', 'imgs/sunny.png');
        }
        else
        {
            document.querySelector('#weathericon').setAttribute('src', iconsrc);
        }};
