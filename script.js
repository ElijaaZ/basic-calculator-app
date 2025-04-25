const buttonValues = [
  "C",
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

const display = document.querySelector(".display");
const sum = document.querySelector(".sum");
let input = "";
display.textContent = "0";

buttonValues.forEach((value) => {
  const button = document.createElement("button");
  button.textContent = value;
  button.classList.add("btn");
  button.addEventListener("click", () => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      input = "";
      display.textContent = "0";
      sum.textContent = "";
      displaySize("large");
    } else if (value === "⌫") {
      input = input.slice(0, -1);
      display.textContent = input || "0";
    } else {
      if (sum.textContent) {
        input = sum.textContent;
        sum.textContent = "";
        displaySize("large");
      }
      input += value;
      display.textContent = input;
      display.scrollLeft = display.scrollWidth;
    }
  });
  buttonsContainer.appendChild(button);

  if (value === "+") {
    button.classList.add("plus");
  } else if (value === "=") {
    button.classList.add("equal");
  } else if (value === "0") {
    button.classList.add("wide");
  } else if (value === "-" || value === "*" || value === "/") {
    button.classList.add("bluebtn");
  } else if (value === "C" || value === "⌫") {
    button.style.backgroundColor = "#616161";
    button.style.color = "#A5A5A5";
  }
});

function displaySize(size) {
  display.classList.remove("small", "large");
  display.classList.add(size);
}

function calculate() {
  total = eval(input);
  sum.textContent = total;
  displaySize("small");
  sum.scrollLeft = sum.scrollWidth;
}
