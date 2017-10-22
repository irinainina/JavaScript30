var triggers = document.querySelectorAll("a");
var highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
    var link = this.getBoundingClientRect();
    console.log(link)
   
    highlight.style.width = `${link.width}px`;
    highlight.style.height = `${link.height}px`;
    highlight.style.transform = `translate(${link.left + window.scrollX}px, ${link.top + window.scrollY}px)`;
}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));