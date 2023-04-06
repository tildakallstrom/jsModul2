function generateText() {
    event.preventDefault();
    const textInput = document.getElementById("text-input").value;
    const numTimes = document.getElementById("num-times").value;
    const outputDiv = document.getElementById("outputs1");
    outputDiv.innerHTML = "";

    const minFontSize = 10;
    const maxFontSize = 200;
    const numSteps = numTimes - 1;
    const stepSize = (maxFontSize - minFontSize) / numSteps;

    let fontSize = minFontSize;
    for (let i = 1; i <= numTimes; i++) {
        const newElem = document.createElement("p");
        newElem.innerText = textInput;
        newElem.style.fontSize = `${fontSize}%`;
        outputDiv.appendChild(newElem);
        fontSize += stepSize;
    }
}