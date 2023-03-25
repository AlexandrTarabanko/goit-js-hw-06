const formRef = document.querySelector(".login-form");
const obj = {};
const onSubmit = (event) => {
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;
  event.preventDefault();
  if (!email.value || !password.value) {
    alert("You haven't filled all the gaps");
  } else {
    obj.email = email.value;
    obj.password = password.value;

    console.log(obj);
  }
  event.currentTarget.reset();
};

formRef.addEventListener("submit", onSubmit);
