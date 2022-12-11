function weatherBalloon( cityID ) {
    var key = '7085b59d4a786d720061217efd0eaa85';
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,CA&appid=7085b59d4a786d720061217efd0eaa85")  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBalloon( 6167865 );
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;

    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
}