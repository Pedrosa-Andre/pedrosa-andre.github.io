
//var requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2860384eba6f003db94da4484cbcf9fd&units=imperial';
var requestURL = 'https://pedrosa-andre.github.io/assignments/lesson-10/scripts/preston-w1.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
//request.responseType = 'json'; 
request.send();

request.onload = function() {
    var weatherData = JSON.parse(request.responseText); //JSON.parse substitutes the request.responseType = 'json'; 
    console.log(weatherData);
    populateHero(weatherData);
}

function populateHero(jsonInfo){
    var wheather = jsonInfo['weather'];
    var main = jsonInfo['main'];
    var rain = jsonInfo['rain'];
    var wind = jsonInfo['wind'];
    
    document.getElementById("currently").textContent= wheather[0].description;
    document.getElementById("temperature").textContent= main.temp;
    document.getElementById("humidity").textContent= main.humidity;
    /*sometimes the rain object is missing in the Json file (when there is no rain)
    so I created the if case bellow to handle this*/
    if (rain == undefined){ 
        document.getElementById("precipitation").textContent= "0 inches";
    } else {
        var raininch = rain["1h"]*0.039
        document.getElementById("precipitation").textContent= raininch + " inches";
    }    
    document.getElementById("wspeed").textContent= wind.speed + " mph";
}