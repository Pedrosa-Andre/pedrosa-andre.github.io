var requestURL = 'https://pedrosa-andre.github.io/assignments/templesite/scripts/temples.json';
//var requestURL = 'C:/Matheus Temp/pedrosa-andre.github.io/assignments/templesite/scripts/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var templeInfo = request.response;
    showTemple(templeInfo);
}
var ptname =  document.getElementById('templePageName').getAttribute('val');

function showTemple(jsonObj) {
    var temple = jsonObj['temples'];
    for (var i = 0; i < temple.length; i++) {
        if (temple[i].name == ptname){ 
            var myBr = document.createElement('br');
            var myArticle = document.createElement('article');
            var myName = document.createElement('h2');
            var myAddress = document.createElement('h3');
            var myAddresst1 = document.createElement('p');
            myAddresst1.className = "difer"
            var myAddresst2 = document.createElement('p');
            myAddresst2.className = "difer"
            var myAddresst3 = document.createElement('p');
            myAddresst3.className = "difer"
            var myTell = document.createElement('h3');
            var myTellt = document.createElement('p');
            myTellt.className = "difer"
            var myServices = document.createElement('h3');
            var myServicest0 = document.createElement('p');
            myServicest0.className ="difer"
            var myServicest1 = document.createElement('p');
            myServicest1.className ="difer"
            var myServicest2 = document.createElement('p');
            myServicest2.className ="difer"
            var myServicest3 = document.createElement('p');
            myServicest3.className ="difer"
            var myHistory = document.createElement('h3');
            var myHistoryt = document.createElement('p');
            var myClosures = document.createElement('h3');
            var myClosurest0 = document.createElement('p');
            myClosurest0.className ="difer"
            var myClosurest1 = document.createElement('p');
            myClosurest1.className ="difer"
            var myClosurest2 = document.createElement('p');
            myClosurest2.className ="difer"
            var myClosurest3 = document.createElement('p');
            myClosurest3.className ="difer"
            var myClosurest4 = document.createElement('p');
            myClosurest4.className ="difer"
            var myClosurest5 = document.createElement('p');
            myClosurest5.className ="difer"
            var myClosurest6 = document.createElement('p');
            myClosurest6.className ="difer"

            myName.textContent = temple[i].name;
            myAddress.textContent = "Address"
            myAddresst1.textContent = temple[i].address[0];
            myAddresst2.textContent = temple[i].address[1];
            myAddresst3.textContent = temple[i].address[2];
            myTell.textContent = "Telephone"
            myTellt.textContent = temple[i].tel;
            myServices.textContent = "Services"
            myServicest0.textContent = temple[i].services[0];
            myServicest1.textContent = temple[i].services[1];
            myServicest2.textContent = temple[i].services[2];
            myServicest3.textContent = temple[i].services[3];
            myHistory.textContent = "Brief History"
            myHistoryt.textContent = temple[i].history;

            myClosures.textContent = "Temple Eclosures"
            myClosurest0.textContent = temple[i].closure[0];
            myClosurest1.textContent = temple[i].closure[1];
            myClosurest2.textContent = temple[i].closure[2];
            myClosurest3.textContent = temple[i].closure[3];
            myClosurest4.textContent = temple[i].closure[4];
            myClosurest5.textContent = temple[i].closure[5];
            myClosurest6.textContent = temple[i].closure[6];
            

            
            myArticle.appendChild(myName);
            myArticle.appendChild(myAddress);
            myArticle.appendChild(myAddresst1);
            myArticle.appendChild(myAddresst2);
            myArticle.appendChild(myAddresst3);
            myArticle.appendChild(myTell);
            myArticle.appendChild(myTellt);
            myArticle.appendChild(myServices);
            myArticle.appendChild(myServicest0);
            myArticle.appendChild(myServicest1);
            myArticle.appendChild(myServicest2);
            myArticle.appendChild(myServicest3);
            myArticle.appendChild(myHistory);
            myArticle.appendChild(myHistoryt);
            myArticle.appendChild(myClosures);
            myArticle.appendChild(myClosurest0);
            myArticle.appendChild(myClosurest1);
            myArticle.appendChild(myClosurest2);
            myArticle.appendChild(myClosurest3);
            myArticle.appendChild(myClosurest4);
            myArticle.appendChild(myClosurest5);
            myArticle.appendChild(myClosurest6);
       
            section.appendChild(myArticle);
        }
    }
}
