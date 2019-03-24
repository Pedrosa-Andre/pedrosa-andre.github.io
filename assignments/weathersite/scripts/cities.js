
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var citiesNames = request.response;
    showCities(citiesNames);
}
function showCities(jsonObj) {
    var cities = jsonObj['towns'];
        
    for (var i = 0; i < cities.length; i++) {
        //chech if the name of the city is one of the bellow
        if (['Preston','Soda Springs','Fish Haven'].indexOf(cities[i].name) >=0){ 
            var myA = document.createElement('a');
            //uses city name to create a link to its html page
            myA.href = cities[i].name.replace(/\s/g, "-").toLowerCase() + '.html';
            var myH2 = document.createElement('h2');
            var myMotto = document.createElement('p');
            myMotto.className = "italic"; //css purpose only
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myImg = document.createElement('img');
            //search for the correct picture based on the city's name
            myImg.src = 'images/cities/' + cities[i].name.replace(/\s/g, "-").toLowerCase() + '.jpg';
            //add a custom alt text
            myImg.alt = 'Picture of ' + cities[i].name;
        
            myH2.textContent = cities[i].name;
            myMotto.textContent = cities[i].motto;
            myPara1.textContent = 'Year Founded: ' + cities[i].yearFounded;
            myPara2.textContent = 'Population: ' + cities[i].currentPopulation;
            myPara3.textContent = 'Annual Rain Fall: ' + cities[i].averageRainfall +'"';
                
            myA.appendChild(myH2);
            myA.appendChild(myMotto);
            myA.appendChild(myPara1);
            myA.appendChild(myPara2);
            myA.appendChild(myPara3);
            myA.appendChild(myImg);
        
            section.appendChild(myA);
        }
    }
}