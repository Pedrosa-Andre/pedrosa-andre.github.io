temp = parseFloat((Math.random() * 50)-20).toFixed(1);
temperature.setAttribute('vall',temp);
document.getElementById('temperature').innerHTML = temp + "&#176F";

spee = parseFloat((Math.random() * 30)).toFixed(1);
speed.setAttribute('vall',spee);
document.getElementById('speed').innerHTML = spee + " mi/h";