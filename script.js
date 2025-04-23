const buttonValues = [
  "c",
  "⌫",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "+",
  "=",
  "0",
  ".",
];

const buttonsContainer = document.querySelector(".buttons");

buttonValues.forEach((value) => {
  const button = document.createElement("button");
  button.textContent = value;
  button.classList.add("btn");
  buttonsContainer.appendChild(button);

  if (value === "+") {
    button.classList.add("plus");
  } else if (value === "=") {
    button.classList.add("equal");
  } else if (value === "0") {
    button.classList.add("wide");
  } else if (value === "-" || value === "*" || value === "/") {
    button.classList.add("bluebtn");
  } else if (value === "c" || value === "⌫") {
    button.style.backgroundColor = "#616161";
    button.style.color = "#A5A5A5";
  }
});
