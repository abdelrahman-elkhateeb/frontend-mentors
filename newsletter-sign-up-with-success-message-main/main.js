const card = document.getElementById("mainCard");
const successCard = document.getElementById("successCard");
const input = document.getElementById("email");
const submitBtn = document.getElementById("submit");

const invalid = document.getElementById("invalid-email");
const resetBtn = document.getElementById("reset");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = input.value;
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(value)) {
    input.classList.add("invalid");
    invalid.style.display = "block";
  } else {
    card.style.display = "none";
    successCard.style.display = "grid";
  }
});

input.addEventListener("blur", () => {
  input.classList.remove("invalid");
  invalid.style.display = "none";
});

resetBtn.addEventListener("click", () => {
  location.reload();
})