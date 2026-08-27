function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const blood = document.getElementById("blood").value;
  const agree = document.getElementById("agree").checked;
  const error = document.getElementById("error");

  if (!name || !email || !blood || !agree) {
    error.textContent = "Please complete the required fields and confirm the demo checkbox.";
    return false;
  }

  error.textContent = "";
  alert("Registration submitted — demo only.");
  return false;
}