window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var text = document.getElementById("text");
var speakButton = document.getElementById("speak");
var body = document.querySelector("body");
var voice = "белый";

var colors = {
    "белый": "#F7F7F7",
    "красный": "#BC382E",
    "оранжевый": "#FF8000",
    "желтый": "#F5BD00",
    "зеленый": "#388D80",
    "голубой": "#4583AA",
    "синий цвет": "#163260",
    "фиолетовый": "#560DA6"
}

function speak() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text.value;
    speechSynthesis.speak(msg);    
}

var recognition = new SpeechRecognition();
recognition.interimResults = true; 

function recognitionVoice(e) {
    voice = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
    console.log(voice); 
    
    for (key in colors) {
        if(voice === key) {
            body.style.backgroundColor = colors[key];
        }
    }
}

recognition.addEventListener("result", recognitionVoice);

recognition.addEventListener("end", function(e) {
    recognition.start();
});

speakButton.addEventListener("click", speak);
recognition.start();