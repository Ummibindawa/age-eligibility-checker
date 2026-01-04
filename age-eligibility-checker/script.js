
function checkAge() {
    let age = Number(document.getElementById("ageInput").value);
    let result = document.getElementById("result");
  
    if (age >= 18) {
      result.textContent = "You are eligible ✅";
    } else {
      result.textContent = "You are not eligible ❌";
    }
  }