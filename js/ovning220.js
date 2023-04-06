const godJul = document.getElementById("god-jul2");

let xPos = 0;
godJul.style.left = xPos + "px";

setInterval(function() {
    xPos += 1;
    godJul.style.left = xPos + "px";
}, 50); 