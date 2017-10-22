var arrow = document.querySelector(".arrow");
var units = document.querySelector(".units");

navigator.geolocation.getCurrentPosition(function(position) {
    var latitude  = position.coords.latitude; // широта
    var longitude = position.coords.longitude; // долгота
    
    units.innerHTML = "<span>Ваши координаты:</span><br>Широта: " + latitude.toFixed(3) + "° <br>Долгота: " + longitude.toFixed(3) + "°<br>";

    var img = new Image();
    img.style.margin = "20px";
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    units.appendChild(img);
});







/* 
navigator.geolocation.watchPosition(
    data => {
        console.log(data)
        //If we have the users speed then update the speed shown
        data.coords.speed ? (speed.textContent = data.coords.speed) : false
        //Rotate the arrow based on the datas heading
        arrow.style.transform = `rotate(${data.coords.heading}deg)`
        //Set the data to be shown to the user:
        var notes =
            "Accuracy (m): " +
            data.coords.accuracy +
            "\nAltitude (m): " +
            data.coords.altitude +
            "\nHeading: " +
            data.coords.heading +
            "\nSpeed (km/h): " +
            data.coords.speed +
            "\nLat: " +
            data.coords.latitude +
            "\nLong: " +
            data.coords.longitude
        dataStore.textContent = notes
    },
    err => {
        console.log(err)
        alert("Hey, you haven"t allowed us access to your location.")
    },
)
*/