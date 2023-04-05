function printPrefixes() {
    const text = document.getElementById("input").value;
    let output = "";
    let output1 = "";

    for (let i = 1; i <= text.length; i++) {
        output += text.slice(0, i) + "<br>";
    }

    for (let i = 2; i <= text.length; i++) {
        output1 += text.slice(1, i) + "<br>";
    }

    document.getElementById("output").innerHTML = output;
    document.getElementById("output1").innerHTML = output1;
}