function changeTo(p) {
var pic = p;
    switch (pic) {
        case 'pic1':
            document.getElementById("span1").className = "big";
            document.getElementById("span2").className = "";
            document.getElementById("span3").className = "";
            document.getElementById("span4").className = "";
            brake;
        case 'pic2':
            document.getElementById("span1").className = "";
            document.getElementById("span2").className = "big";
            document.getElementById("span3").className = "";
            document.getElementById("span4").className = "";
            brake;
        case 'pic3':
            document.getElementById("span1").className = "";
            document.getElementById("span2").className = "";
            document.getElementById("span3").className = "big";
            document.getElementById("span4").className = "";
            brake;
        case 'pic4':
            document.getElementById("span1").className = "";
            document.getElementById("span2").className = "";
            document.getElementById("span3").className = "";
            document.getElementById("span4").className = "big";
            brake;
        default:
    }
}