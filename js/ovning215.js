function crypt(text) {
    const cryptedLetters = {
      "o": "!",
      "e": "#",
      "t": "%",
      "n": "&"
    };
  
    let cryptedText = "";
  
    for (let i = 0; i < text.length; i++) {
      const letter = text.charAt(i);
      cryptedText += cryptedLetters[letter] || letter;
    }
  
    return cryptedText;
  }
  
  function decrypt(cryptedText) {
    const decryptedLetters = {
      "!": "o",
      "#": "e",
      "%": "t",
      "&": "n"
    };
  
    let text = "";
  
    for (let i = 0; i < cryptedText.length; i++) {
      const letter = cryptedText.charAt(i);
      text += decryptedLetters[letter] || letter;
    }
  
    return text;
  }
  
  function cryptText() {
    const input = document.getElementById("inputs").value;
    const output = document.getElementById("outputs");
    const cryptedText = crypt(input);
    output.innerText = cryptedText;
  }
  
  function decryptText() {
    const input = document.getElementById("outputs").innerText;
    const output = document.getElementById("outputs");
    const text = decrypt(input);
    output.innerText = text;
  }
