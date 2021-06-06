function london() {
    var hourHand = document.querySelector(".london .hour");
    var minHand = document.querySelector(".london .min");
    var secHand = document.querySelector(".london .second");
    setTime(-4, -30, 0, hourHand, secHand, minHand);
    
}

function setTime(chour, cMin, Csec, hourHand, minHand, secHand) {
    var curDate = new Date();
    var hour = curDate.getHours() + chour;
    var hourDeg = ((hour/12) * 360) + 90;
    var min = curDate.getMinutes() + cMin;
    var minDeg = ((min/60) * 360) + 90;
    var sec = curDate.getSeconds() + Csec;
    var secDeg = ((sec/60) * 360) + 90;
    hourHand.style.transform = "rotate("+hourDeg+"deg)";
    minHand.style.transform = "rotate("+minDeg+"deg)"; 
    secHand.style.transform = "rotate("+secDeg+"deg)";
    console.log(hourDeg);
}
setInterval(london, 1000);
console.log(document.querySelector(".london .hour"));