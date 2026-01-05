// Get elements from the DOM
const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Function to check even or odd
function checkEvenOrOdd() {
  const number = numberInput.value;

  // Check if input is empty
  if (number === "") {
    result.textContent = "Please enter a number";
    return;
  }

  // Convert string to number
  const convertedNumber = Number(number);

  // Check even or odd
  if (convertedNumber % 2 === 0) {
    result.textContent = convertedNumber + " is Even";
  } else {
    result.textContent = convertedNumber + " is Odd";
  }
}

// Event listener
checkBtn.addEventListener("click", checkEvenOrOdd);