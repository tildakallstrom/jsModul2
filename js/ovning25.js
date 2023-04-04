let words = ["God", "och", "JUL", "Gott", "år","Nytt"];
document.getElementById("array").innerHTML = words;
let arrangedWords = [words[0], words[2], words[1], words[3], words[5], words[4]];

function create() {
let arrangedWordsStr = arrangedWords.join(" ");
document.getElementById("text").innerHTML = arrangedWordsStr;
}