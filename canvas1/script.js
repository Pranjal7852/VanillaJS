const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // ctx.fillStyle = "white";
    // ctx.fillRect(100, 0, 50, 50);
});
ctx.fillStyle = "red";
ctx.strokeStyle = "violet";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.arc(50, 50, 100, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
console.log(ctx);
var mouse = {
    x: null,
    y: null
}
function mouseCoor (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    console.log(event);
}
