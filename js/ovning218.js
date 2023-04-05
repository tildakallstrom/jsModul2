function move() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var div = document.getElementById("god-jul");
    div.style.top = y + "px";
    div.style.left = x + "px";
}