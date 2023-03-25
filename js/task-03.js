const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const mainList = document.querySelector(".gallery");
mainList.style.display = "flex";
mainList.style.listStyle = "none";
mainList.style.alignItems = "center";
mainList.style.justifyContent = "space-evenly";
mainList.style.background = "maroon";

const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}" width=300 height=200></li>`
  )
  .join("");

mainList.insertAdjacentHTML("beforeend", markup);
console.log(mainList);
