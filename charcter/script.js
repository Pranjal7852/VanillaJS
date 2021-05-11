window.addEventListener("keydown", function(event) {
    if (event.code == "Space") {
        document.querySelector(".container h1").innerHTML = event.code;
    }
    else {
        document.querySelector(".container h1").innerHTML = event.key;
    }
    
    console.log(event);
    document.querySelector(".discrip").innerHTML = "Keycode of Key is "+event.keyCode;
    document.querySelector(".prop-1 span").innerHTML = event.code;
    document.querySelector(".prop-2 span").innerHTML = Math.round(event.timeStamp) + " ms";
    document.querySelector(".prop-3 span").innerHTML = (event.key).charCodeAt(0).toString(2);
});
document.querySelector(".mode").addEventListener("click", function() {
    var body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    var chk = body.classList.contains("dark-mode")
    if (chk === true) {
        document.querySelector("i").classList.remove("fa-moon");
        document.querySelector("i").classList.add("fa-sun");
    }
    else {
        document.querySelector("i").classList.remove("fa-sun");
        document.querySelector("i").classList.add("fa-moon");
    }


});

