const list = document.querySelector("#categories");
const listItem = document.querySelector(".item")

const listLength = list.querySelectorAll(".item");


const firstChild = document.querySelector("#categories").childNodes[1];
const firstTitle = firstChild.querySelector("h2")
const firstTitleContext = firstChild.querySelector("h2").textContent;
const firstList = firstChild.querySelector("ul");

const firstListLength = firstChild.querySelectorAll("ul li");


const secondChild = document.querySelector("#categories").childNodes[3];
const secondTitle = secondChild.querySelector("h2")
const secondTitleContext = secondChild.querySelector("h2").textContent;
const secondList = secondChild.querySelector("ul");

const secondListLength = secondChild.querySelectorAll("ul li");


const thirdChild = document.querySelector("#categories").childNodes[5];
const thirdTitle = thirdChild.querySelector("h2");
const thirdTitleContext = thirdChild.querySelector("h2").textContent;
const thirdList = thirdChild.querySelector("ul");

const thirdListLength = thirdChild.querySelectorAll("ul li");


function totalElements(items) {
  let total = 0;

    items.forEach(() => {
    total += 1;
  });

  return total;
}



console.log(`Number of categories: ${totalElements(listLength)}`);

console.log(`Category: ${firstTitleContext}`);
console.log(`Elements: ${totalElements(firstListLength)}`);

console.log(`Category: ${secondTitleContext}`);
console.log(`Elements: ${totalElements(secondListLength)}`);

console.log(`Category: ${thirdTitleContext}`);
console.log(`Elements: ${totalElements(thirdListLength)}`);

list.classList.add("big-list");
listItem.classList.add("categories-items");
secondChild.classList.add("categories-items");
thirdChild.classList.add("categories-items");
firstTitle.classList.add("title");
secondTitle.classList.add("title");
thirdTitle.classList.add("title");
firstList.classList.add("list-items");
secondList.classList.add("list-items");
thirdList.classList.add("list-items");