window.addEventListener("scroll", anim);

var imgs = document.querySelectorAll("img");

function anim() {
    imgs.forEach(function(img) {
        checkViewport(img) ? img.classList.add("active") : img.classList.remove("active")
    });
}

function checkViewport(a) {
    var b = a.getBoundingClientRect();
    return -0.5 * a.scrollHeight < b.top && b.top + 0.5 * a.scrollHeight < window.innerHeight;
};