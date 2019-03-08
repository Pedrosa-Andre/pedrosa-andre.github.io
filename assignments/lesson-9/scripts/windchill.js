/* Autor: Andre Pedrosa (from a previous semester) */
/* Defining Table
Input: Wind emperature and wind speed;
Processing: Calculate the wind chill index;
Output: The wind chill.
*/

var tempF = parseFloat(document.getElementById('temperature').getAttribute('vall'));
var speed = parseFloat(document.getElementById('speed').getAttribute('vall'));
var message = windChill(tempF,speed);
document.getElementById('output').innerHTML = message.toFixed(1) + "&#176F";


function windChill(t, s){
	var result = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + ((0.4275 * t) * (Math.pow(s, 0.16)));
    return result;
}