const inputRef = document.querySelector("#validation-input");

const onWriting = () => {
  const inputCondition = Number(inputRef.dataset.length);
  const inputByUser = Number(inputRef.value.trim().length);
  if (inputByUser >= inputCondition) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", onWriting);
