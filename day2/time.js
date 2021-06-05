

var hourHand = document.querySelector(".second");
setInterval(function () {
    var curDate = new Date();
    var hour = curDate.getHours();
    var min = curDate.getMinutes();
    var sec = curDate.getSeconds();
    hourHand.style.transform = "rotate("+sec+"deg);"; 
    console.log("rotate("+sec+"deg);");
}, 1000);
