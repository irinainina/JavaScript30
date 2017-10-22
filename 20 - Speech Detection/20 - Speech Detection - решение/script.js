window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var words = document.querySelector(".words");
var start = document.getElementById("start");
var clear = document.getElementById("clear");

var rec = new SpeechRecognition();
rec.interimResults = true;

var p = document.createElement("p");
words.appendChild(p);

start.addEventListener("click", function() {
    rec.start();
    this.disabled = true;
    this.innerHTML = "LISTENING...";
});

clear.addEventListener("click", function() {
    words.innerHTML = "";
    p = document.createElement("p");
    words.appendChild(p);
});

rec.addEventListener("result", function(e) {
    var text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    p.innerHTML = text;
});

rec.addEventListener("end", function(e) {
    if (p.innerHTML) {
        p = document.createElement("p");
        words.appendChild(p);
    }
    rec.start();
});