const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ОСНОВНОЕ РЕШЕНИЕ
const mainList = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = `${el}`;
  return li;
});

mainList.append(...elements); // за одну

console.log(mainList);

// ingredients.forEach((el) => {
//   const li = document.createElement("li");
//   li.classList.add("item");                                              // ДРУГОЕ РЕШЕНИЕ
//   li.textContent = `${el}`;
//   mainList.append(li); // добавление за несколько итераций
// });
// console.log(mainList);
