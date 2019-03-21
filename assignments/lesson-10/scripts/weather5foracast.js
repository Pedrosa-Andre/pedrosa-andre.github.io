var requestURL = "https://pedrosa-andre.github.io/assignments/lesson-10/scripts/test.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var fiveDayInfo = request.response;
    console.log(fiveDayInfo);
    fiveDayForecast(fiveDayInfo);
}
function fiveDayForecast (jsonInfo) {
    document.getElementById("wspeed").textContent= jsonInfo;
}