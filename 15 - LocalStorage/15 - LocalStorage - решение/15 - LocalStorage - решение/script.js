var add = document.getElementById("add");
var del = document.getElementById("del");
var select = document.querySelector("select");
var icon = document.querySelector(".icon");
var list = document.querySelector(".plates");
var l = "apple";
var state = {
    items: []
};

var data = localStorage.getItem("data");
if(data) {
    state = JSON.parse(data);
}

window.onload = function() {
    var loaded = sessionStorage.getItem("loaded");
    if(loaded) {
        update();
    } else {
        sessionStorage.setItem("loaded", true);
    }
}

function update(){
    list.innerHTML = "";
    for(var i = 0; i < state.items.length; i++) {
        var li = document.createElement("li");
        li.innerText = state.items[i];
        list.appendChild(li); 
    }
}

select.addEventListener("change", function(e) {
    l = this.value;
    changeLogo();
});

function changeLogo() {
    icon.style.backgroundImage = 'url("img/' + l + '.svg")'
}

function addItem(event) {
    event.preventDefault();
    var li = document.createElement("li");
    li.textContent = l;
    list.appendChild(li);
    
    state.items.push(l);
    localStorage.setItem("data", JSON.stringify(state));
}

function delItem(event){
    event.preventDefault();
    localStorage.clear();
    list.innerHTML = "";
    state.items = [];
}

add.addEventListener("click", addItem);
del.addEventListener("click", delItem);