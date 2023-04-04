let words5 = ["det", "är", "kul", "att", "programmera"];
let text = "";

for (let i = 0; i < words5.length; i++) {
  text += words5[i];
  if (i !== words5.length - 1) {
    text += " ";
  }
}

document.getElementById("display3").innerHTML = text;