var inputText = document.querySelector(".input-text");
var button = document.querySelector("button");
var rede = document.querySelector(".rede");
var pressed = [];

window.addEventListener("keydown", function(event) {
    pressed.push(event.key);
    rede.innerText = "Вы ввели:";
    button.classList.remove("hide");
    inputText.innerText = pressed.join("");
    if(pressed.length > 8) {
        pressed.splice(0, 1);
    }
});

button.addEventListener("click", function() {
    pressed = [];
    inputText.innerText = "";
    rede.innerText = "";
    button.classList.add("hide");
});