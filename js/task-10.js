function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDivRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const divBoxRef = document.querySelector("#boxes");
let originalValue = 0;

divBoxRef.style.display = "flex";
divBoxRef.style.alignItems = "center";
divBoxRef.style.justifyContent = "center";
divBoxRef.style.marginTop = "50px";

const onSizeInput = (event) => {
  originalValue = event.currentTarget.value;
};

const createBoxes = (amount) => {
  let initialSize = 30;
  let divArrayQuantity = [];
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    initialSize += 10;
    newDiv.style.width = `${initialSize}px`;
    newDiv.style.height = `${initialSize}px`;
    newDiv.style.marginRight = `20px`;
    newDiv.style.marginBottom = `20px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divArrayQuantity.push(newDiv);
  }
  return divBoxRef.append(...divArrayQuantity);
};

const destroyBoxes = () => {
  inputRef.value = "";
  return (divBoxRef.innerHTML = "");
};

inputRef.addEventListener("input", onSizeInput);
createBtnRef.addEventListener("click", () => {
  createBoxes(Number(inputRef.value));
});
destroyBtnRef.addEventListener("click", destroyBoxes);
