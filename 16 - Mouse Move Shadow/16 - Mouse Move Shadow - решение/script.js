var hero = document.querySelector(".hero");
var text = hero.querySelector("h1");
var walk = 500; // 500px

function shadow(event) {
    var width = hero.offsetWidth;
    var height = hero.offsetHeight;
    
    x = event.offsetX;
    y = event.offsetY;
       
    if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }

    var xWalk = Math.round((x / width * walk) - (walk / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
${xWalk}px ${yWalk}px 0 #822DAF,
${xWalk * -1}px ${yWalk}px 0 #F01F6C,
${yWalk}px ${xWalk * -1}px 0 #B71707,
${yWalk * -1}px ${xWalk}px 0 #B75D07
`;

}

hero.addEventListener("mousemove", shadow);