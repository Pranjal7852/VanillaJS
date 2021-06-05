var btns = document.querySelectorAll("button");
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", function() {
        var txt = this.innerHTML;
        makeSound(txt);
        animation(txt);
    });   
    
}

window.addEventListener("keydown", function(e) {
   makeSound(e.key);
   animation(e.key);
});
function makeSound(key) {
    switch(key) {
        case "a":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "s":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break; 
        case "d":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break; 
        case "f":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break; 
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break; 
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break; 
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;    
    }
}

function animation(btn) {
    var buttonPressed = document.querySelector("."+btn);
    buttonPressed.classList.add("active");
    setTimeout(function() {
        buttonPressed.classList.remove("active");  
    },200);
    
}
var hover = document.querySelector(".hover");
hover.addEventListener("click", function () {
    if (hover.classList.contains("off") === true) {
        console.log("Yes");
        hover.classList.add("pressed");
        for (let index = 0; index < btns.length; index++) {
            btns[index].addEventListener("mouseenter", function() {
                var txt = this.innerHTML;
                makeSound(txt);
                animation(txt);
            });   
            
        }
        hover.classList.replace("off", "on");
    }
    else if (hover.classList.contains("on") === true) {
        console.log("no");
        hover.classList.remove("pressed");
        for (let index = 0; index < btns.length; index++) {
            btns[index].removeEventListener("mouseenter", function() {
                var txt = this.innerHTML;
                makeSound(txt);
                animation(txt);
            });   
            
        }
        hover.classList.replace("on", "off");
    }
});