// Animation SVG
var path = document.querySelectorAll("#logo path");

for (i=0; i <= path.length ; i++) {
    var pathLenth = path[i].getTotalLength();
    console.log(pathLenth);
}