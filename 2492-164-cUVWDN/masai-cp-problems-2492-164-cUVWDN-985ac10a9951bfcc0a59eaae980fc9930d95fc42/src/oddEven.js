function generateNumber() {
  // generate a random integer(hint : Math.random)
  let randomNumber = Math.floor(Math.random() * 100) + 1 ;

  document.getElementById("number").textContent = `Generated Number: ${randomNumber}`;
}

function checkOddEven(num) {
  // logic for even / odd

  let result = num % 2 === 0 ? "Even" : "Odd";

  document.getElementById("odd-even").textContent = `The number is ${result}`;
}

window.onload = function () {
  // add event listeners to the button here
  document.getElementById("generate-number").addEventListener("click", generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
