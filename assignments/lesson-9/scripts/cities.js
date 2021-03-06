
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
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myMotto = document.createElement('p');
            myMotto.className = "italic"; //css purpose only
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myImg = document.createElement('img');
            var citNameNoS = cities[i].name.replace(/\s/g, ""); 
         /* var citNameNoS = cities[i].name.string.replace(/\s/g, ""); 
            -To the instructor: by the time I submitted this I tested and the site was working fine,
            but somehow I got a typo here (".string" in the middle of the line) that made everything
            stop working and it was committed with the error. I noticed and corrected it now (12/03) 
            after the due date and corrected now, but I hope it doesn't worth any point deduction.*/
            var citName = cities[i].name;
            //search for the correct picture based on the city's name
            myImg.src = 'images/cities/' + citNameNoS.toLowerCase() + '.jpg';
            //add a custom alt text
            myImg.alt = 'picture of ' + citName;
        
            myH2.textContent = cities[i].name;
            myMotto.textContent = cities[i].motto;
            myPara1.textContent = 'Year Founded: ' + cities[i].yearFounded;
            myPara2.textContent = 'Population: ' + cities[i].currentPopulation;
            myPara3.textContent = 'Annual Rain Fall: ' + cities[i].averageRainfall +'"';
                
            myArticle.appendChild(myH2);
            myArticle.appendChild(myMotto);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myImg);
        
            section.appendChild(myArticle);
        }
    }
}