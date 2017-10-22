var language = document.querySelector(".language");
var p = document.querySelectorAll("p");

language.textContent = "en";

language.addEventListener("click", function() {
    p.forEach(elem => elem.classList.toggle("ru"));
    
    return language.textContent == "en" ? 
        language.textContent = "ru" : language.textContent = "en";
    });