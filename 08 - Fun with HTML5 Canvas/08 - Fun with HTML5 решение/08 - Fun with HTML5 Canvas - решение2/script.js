var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
var colors = document.querySelectorAll(".color")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;

var isDrawing = false;
var lastX = 0;
var LastY = 0;
var hue = 0;

colors.forEach(color => color.addEventListener("click", function() {
    hue = this.dataset.color;
}));


function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);