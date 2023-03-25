let counterValue = 0;
const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onClickDecrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

const onClickIncrement = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrement);
incrementBtn.addEventListener("click", onClickIncrement);
