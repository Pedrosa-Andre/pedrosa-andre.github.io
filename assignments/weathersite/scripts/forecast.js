// forecast
var cityId = document.getElementById('cityId').getAttribute('val'); //Now the city ID will be stored on each html page
var openWeatherMapId = '2860384eba6f003db94da4484cbcf9fd'; // place your OpenWeatherMap id between the single quotes

//var apiForecastUrl = 'https://pedrosa-andre.github.io/assignments/lesson-10/scripts/preston-w5.json'; //for testing
var apiForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast' +
    '?id=' + cityId + 
    '&appid=' + openWeatherMapId +
    '&units=imperial';

var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiForecastUrl, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function () {
    var forecastData = forecastRequest.response;
    
    // create variables to use in the loop below
    var j = 1;
    var forecastDate;
    var forecastTemp;

    for (i = 0; i < forecastData.list.length; i++)
    {
        // look for forecasts for 21:00:00
        if (forecastData.list[i].dt_txt.includes('21:00:00')) {
            // set date variable
            forecastDate = new Date(forecastData.list[i].dt_txt);
            
            // set temperature variable
            forecastTemp = forecastData.list[i].main.temp.toFixed();
            
            switch (j) {
                case 1:
                    document.getElementById("day1").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("tem1").innerHTML = forecastTemp + "&#176F";
                    break;
                case 2:
                    document.getElementById("day2").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("tem2").innerHTML = forecastTemp + "&#176F";
                    break;
                case 3:
                    document.getElementById("day3").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("tem3").innerHTML = forecastTemp + "&#176F";
                    break;
                case 4:
                    document.getElementById("day4").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("tem4").innerHTML = forecastTemp + "&#176F";
                    break;
                case 5:
                    document.getElementById("day5").innerHTML = getDayOfWeek(forecastDate);
                    document.getElementById("tem5").innerHTML = forecastTemp + "&#176F";
                    break;
            }

            // increment j by 1
            j++;
        }
    }
}
    
function getDayOfWeek(forecastDate) {
    // day of week
    var dayOfWeekNumber = forecastDate.getDay();

    var dayNames = new Array(7);
    dayNames[0] = 'Sun';
    dayNames[1] = 'Mon';
    dayNames[2] = 'Tue';
    dayNames[3] = 'Wed';
    dayNames[4] = 'Thu';
    dayNames[5] = 'Fri';
    dayNames[6] = 'Sat';

    return dayNames[dayOfWeekNumber];
}
