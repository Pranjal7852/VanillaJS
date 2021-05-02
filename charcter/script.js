window.addEventListener("keydown", function(event) {
    if (event.code == "Space") {
        document.querySelector(".container h1").innerHTML = event.code;
    }
    else {
        document.querySelector(".container h1").innerHTML = event.key;
    }
    
    console.log(event);
    document.querySelector(".prop-1 span").innerHTML = event.code;
    document.querySelector(".prop-2 span").innerHTML = Math.round(event.timeStamp) + " ms";
    document.querySelector(".prop-3 span").innerHTML = (event.key).charCodeAt(0).toString(2);
});
document.querySelector(".mode").addEventListener("click", function() {
    document.querySelector("body").classList.toggle("dark-mode");
    var text = document.querySelector(".mode");
    if(text.innerHTML == "Dark Mode") {
        text.innerHTML = "Light Mode"
    }
    else {
        text.innerHTML = "Dark Mode"
    }
});

