let words4 = ["Hej", "Nej", "EJ", "Leverpastej", "42"];
document.getElementById("array3").innerHTML = words4;

function showRandomWord() {
    let randomIndex = Math.floor(Math.random() * words4.length);
    let randomWord = words4[randomIndex];
    document.getElementById("display2").textContent = randomWord;
}