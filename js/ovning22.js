function add(num1, num2) {
    return num1 + num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    
    let sum = add(num1, num2);
    let multiplySum = multiply(num1, num2);
    
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Sum: " + sum + "<br>Product: " + multiplySum;  
}
  