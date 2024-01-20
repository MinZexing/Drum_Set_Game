
var buttonLength = document.querySelectorAll(".drum").length;
for(i = 0; i < buttonLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSounds(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(fuck){
    makeSounds(fuck.key);
    buttonAnimation(fuck.key);
})

function makeSounds(key){
    switch(key){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            var crash = new Audio("./sounds/kick-bass.mp3");
            crash.play();
        break;
        case "s":
            var crash = new Audio("./sounds/snare.mp3");
            crash.play();
        break;
        case "d":
            var crash = new Audio("./sounds/tom-1.mp3");
            crash.play();
        break;
        case "j":
            var crash = new Audio("./sounds/tom-2.mp3");
            crash.play();
        break;
        case "k":
            var crash = new Audio("./sounds/tom-3.mp3");
            crash.play();
        break;
        case "l":
            var crash = new Audio("./sounds/tom-4.mp3");
            crash.play();
        break;
    }
}

function buttonAnimation(input){
    document.querySelector("." + input).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + input).classList.remove("pressed");
    },100)
}

