
var requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2860384eba6f003db94da4484cbcf9fd&units=imperial';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
//request.responseType = 'json'; 
request.send();

request.onload = function() {
    var weatherData = JSON.parse(request.responseText); //JSON.parse substitutes the request.responseType = 'json'; 
    console.log(weatherData);
    populateSpan(weatherData);
}

function populateSpan(jsonInfo){
    var tempp =jsonInfo['main'];
    document.getElementById("current-temp").textContent= tempp.temp;
}