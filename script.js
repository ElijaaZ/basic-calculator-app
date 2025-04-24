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

let display = document.querySelector(".display");
let sum = document.querySelector(".sum");
let input = "";
display.textContent = "0";

buttonValues.forEach((value) => {
  const button = document.createElement("button");
  button.textContent = value;
  button.classList.add("btn");
  button.addEventListener("click", () => {
    if (value === "=") {
      total = eval(input);
      sum.textContent = total;
      display.classList.remove("large");
      display.classList.add("small");
    } else if (value === "c") {
      input = "";
      display.textContent = input;
      display.textContent = "0";
      sum.textContent = "";
      display.classList.remove("small");
      display.classList.add("large");
    } else if (value === "⌫") {
      input = input.slice(0, -1);
      display.textContent = input || 0;
    } else {
      if (sum.textContent) {
        input = sum.textContent;
        sum.textContent = "";
        display.classList.remove("small");
        display.classList.add("large");
      }
      input += value;
      display.textContent = input;
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
  } else if (value === "c" || value === "⌫") {
    button.style.backgroundColor = "#616161";
    button.style.color = "#A5A5A5";
  }
});
