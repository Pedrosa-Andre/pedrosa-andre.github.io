var dt = new Date();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var wd = weekday[dt.getDay()];
var da = dt.getDate();
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var mo = month[dt.getMonth()];
var ye = dt.getFullYear();
var x = "fffff";
document.getElementById("foodate").innerHTML = wd + ", " + da + " " + mo + " " + ye;