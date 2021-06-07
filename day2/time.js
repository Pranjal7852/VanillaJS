function london() {
    var hourHand = document.querySelector(".london .hour");
    var minHand = document.querySelector(".london .min");
    var secHand = document.querySelector(".london .second");
    var time = document.querySelector(".london .time");
    setTime(-4, -30, 0, hourHand, secHand, minHand, time);
    
}
function india() {
    var hourHand = document.querySelector(".india .hour");
    var minHand = document.querySelector(".india .min");
    var secHand = document.querySelector(".india .second");
    var time = document.querySelector(".india .time");
    setTime( 0, 0, 0, hourHand, secHand, minHand, time);

}
function us() {
    var hourHand = document.querySelector(".us .hour");
    var minHand = document.querySelector(".us .min");
    var secHand = document.querySelector(".us .second");
    var time = document.querySelector(".us .time");
    setTime( -9, -30, 0, hourHand, secHand, minHand, time);

}
function japan() {
    var hourHand = document.querySelector(".japan .hour");
    var minHand = document.querySelector(".japan .min");
    var secHand = document.querySelector(".japan .second");
    var time = document.querySelector(".japan .time");
    setTime( 3, 30, 0, hourHand, secHand, minHand, time);

}
function russia() {
    var hourHand = document.querySelector(".russia .hour");
    var minHand = document.querySelector(".russia .min");
    var secHand = document.querySelector(".russia .second");
    var time = document.querySelector(".russia .time");
    setTime( -2, -30, 0, hourHand, secHand, minHand, time);

}
function france() {
    var hourHand = document.querySelector(".france .hour");
    var minHand = document.querySelector(".france .min");
    var secHand = document.querySelector(".france .second");
    var time = document.querySelector(".france .time");
    setTime( -3, -30, 0, hourHand, secHand, minHand, time);

}

function setTime(chour, cMin, Csec, hourHand, minHand, secHand, time) {
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
    time.textContent = Math.abs(hour)+":"+Math.abs(min)+":"+sec;
}
setInterval(london, 1000);
setInterval(india, 1000);
setInterval(us, 1000);
setInterval(japan, 1000);
setInterval(russia, 1000);
setInterval(france, 1000);