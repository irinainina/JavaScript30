var button = document.querySelectorAll(".key");
var audio = document.querySelectorAll("audio");

function clear() {
    for(var i = 0; i < button.length; i++) {
        if(button[i].classList.contains("playing")) {
            button[i].classList.remove("playing");
        }
    }
}

for(var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        clear();
        var id = this.id;
        this.classList.add("playing");
        for(var j = 0; j < button.length; j++) {
            if(audio[j].id == id) {
                audio[j].currentTime = 0;
                audio[j].play();
            }
        }
    });
}


window.addEventListener("keydown", function(event) {
    var keyCode = event.keyCode;

    for(var i = 0; i < button.length; i++) {
        if(button[i].id == keyCode) {
            clear();
            button[i].classList.add("playing");
        }
    }

    for(var j = 0; j < button.length; j++) {
        if(audio[j].id == keyCode) {
            audio[j].currentTime = 0;
            audio[j].play();
        }
    }
});