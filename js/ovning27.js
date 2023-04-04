let words3 = ["Hej", "Nej", "EJ", "Leverpastej", "42"];
document.getElementById("array3").innerHTML = words3;

function showRandomWord() {
    let randomIndex = Math.floor(Math.random() * words3.length);
    let randomWord = words3[randomIndex];
    document.getElementById("display2").textContent = randomWord;
}