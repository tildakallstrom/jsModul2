function printPrefixes() {
    const text = document.getElementById("input").value;
    let output = "";

    for (let i = 1; i <= text.length; i++) {
        output += text.slice(0, i) + "<br>";
    }

    document.getElementById("output").innerHTML = output;
}