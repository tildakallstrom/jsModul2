let words2 = ["Hej", "Nej", "EJ", "Leverpastej", "42"];
document.getElementById("array2").innerHTML = words2;

function displayWord() {
    let wordIndex = Number(document.getElementById("number").value);
    let word = words2[wordIndex];
    document.getElementById("display").textContent = word;
  }