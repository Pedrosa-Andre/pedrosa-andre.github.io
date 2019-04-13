function changeTo(p) {
var pic = p;
    switch (pic) {
        // <img srcset="images/san-diego-temple-small.jpg 500w,
        //              images/san-diego-temple.jpg 800w"
        //         src="images/san-diego-temple-small.jpg" 
        //         alt="san diego california temple"
        //         id="homeimg"></img>
        // <p id="imgbox">The San Diego California Temple has a wonderful and modern design. 
        //  Its shapes, resembling clear white crystals, remembers us of the importance of purity.</p>
        case 'pic1':
            document.getElementById("span1").className = "big";
            document.getElementById("span2").className = "";
            document.getElementById("span3").className = "";
            document.getElementById("span4").className = "";
            document.getElementById("homeimg").srcset="images/san-diego-temple-small.jpg 500w, images/san-diego-temple.jpg 800w";
            document.getElementById("homeimg").src =  "images/san-diego-temple-small.jpg";
            document.getElementById("homeimg").src =  "San Diego California Temple";
            document.getElementById("imgbox").textContent =  "The San Diego California Temple has a wonderful and modern design. Its shapes, resembling clear white crystals, remembers us of the importance of purity";
            brake;
        case 'pic2':
            document.getElementById("span1").className = "";
            document.getElementById("span2").className = "big";
            document.getElementById("span3").className = "";
            document.getElementById("span4").className = "";
            document.getElementById("homeimg").srcset="images/salt-lake-city-small.jpg 500w, images/salt-lake-city.jpg 800w";
            document.getElementById("homeimg").src =  "images/salt-lake-city-small.jpg";
            document.getElementById("homeimg").src =  "Salt Lake City Temple";
            document.getElementById("imgbox").textContent =  "Being one of the most visited temples in the world, Salt Lake Temple shows majesty in each one of its pillars and keeps amazing people from all places.";
            brake;
        case 'pic3':
            document.getElementById("span1").className = "";
            document.getElementById("span2").className = "";
            document.getElementById("span3").className = "big";
            document.getElementById("span4").className = "";
            document.getElementById("homeimg").srcset="images/family-temple-small.jpg 500w, images/family-temple.jpg 800w";
            document.getElementById("homeimg").src =  "images/family-temple-small.jpg";
            document.getElementById("homeimg").src =  "Family visiting the Temple";
            document.getElementById("imgbox").textContent =  "Here at Temple Inn & Suites you can find special rooms and services for families, wedding receptions, and full-time missionaries.";
            brake;
        case 'pic4':
            document.getElementById("span1").className = "";
            document.getElementById("span2").className = "";
            document.getElementById("span3").className = "";
            document.getElementById("span4").className = "big";
            document.getElementById("homeimg").srcset="images/youth-temple-small.jpg 500w, images/youth-temple.jpg 800w";
            document.getElementById("homeimg").src =  "images/youth-temple-small.jpg";
            document.getElementById("homeimg").src =  "Youth attending the Temple";
            document.getElementById("imgbox").textContent =  "You can enjoy the spirit of attending the temples with the comfort of a well-suited hotel. No other worries while serving in the Lord's house.";
            brake;
        default:
    }
}