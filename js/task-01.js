const mainList = document.querySelector("#categories");

console.log(`Number of categories: ${[...mainList.children].length}`);

[...mainList.children].forEach((el) => {
  console.log(`Category : ${el.querySelector("h2").textContent}`);
  console.log(`Elements : ${el.querySelectorAll("li").length}`);
});
