const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const onInputWriting = (event) => {
  const inputValue = event.currentTarget.value;
  !inputValue
    ? (spanRef.textContent = "Anonymous")
    : (spanRef.textContent = inputValue.trim());
};

inputRef.addEventListener("input", onInputWriting);

// const onInputWriting = (event) => {
//   const inputValue = event.currentTarget.value;
//   if (!inputValue) {
//     spanRef.textContent = "Anonymous";
//   } else {
//     spanRef.textContent = inputValue.trim();          // без тернарного
//   }
// };

// inputRef.addEventListener("input", onInputWriting);
