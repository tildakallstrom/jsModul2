function add(num1, num2) {
    return num1 + num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function secondSum(sum, multiplySum) {
    return sum + multiplySum;
  }
  
  function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    
    let sum = add(num1, num2);
    let multiplySum = multiply(num1, num2);
    let resultSum = secondSum(sum, multiplySum);
    
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Sum: " + sum + "<br>Product: " + multiplySum + "<br>Sum of sum: " + resultSum;  
  }  