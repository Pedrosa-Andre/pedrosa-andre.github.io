
//var requestURL2 = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2860384eba6f003db94da4484cbcf9fd&units=imperial";
var requestURL2 = "https://pedrosa-andre.github.io/assignments/lesson-10/scripts/cities.json";
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2, true);
request2.responseType = 'json';
request2.send();

var weekdayShort = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

request2.onload = function() {
    var fiveDayInfo = request2.response;
    console.log(fiveDayInfo);
    fiveDayForecast(fiveDayInfo);
}
function fiveDayForecast (jsonObj) {
    var weatherInfo = jsonObj['list'];
    document.getElementById("tem1").textContent= weatherInfo[0].main.temp;
    document.getElementById("tem2").textContent= weatherInfo[7].main.temp;
    document.getElementById("tem3").textContent= weatherInfo[15].main.temp;
    document.getElementById("tem4").textContent= weatherInfo[23].main.temp;
    document.getElementById("tem5").textContent= weatherInfo[31].main.temp;
    document.getElementById("day1").textContent= weekdayShort[dt.getDay()+1];
    document.getElementById("day2").textContent= weekdayShort[dt.getDay()+2];
    document.getElementById("day3").textContent= weekdayShort[dt.getDay()+3];
    document.getElementById("day4").textContent= weekdayShort[dt.getDay()+4];
    document.getElementById("day5").textContent= weekdayShort[dt.getDay()+5];
}