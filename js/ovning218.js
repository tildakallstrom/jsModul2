function move() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let div = document.getElementById("god-jul");
    div.style.top = y + "px";
    div.style.left = x + "px";
}