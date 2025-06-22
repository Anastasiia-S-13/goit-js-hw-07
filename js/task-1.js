const list = document.querySelector("#categories");
const listItem = document.querySelector(".item")

const listLength = list.querySelectorAll(".item");
list.classList.add("big-list");

function totalElements(params) {
  let total = 0;

    params.forEach(() => {
      total += 1;
  });

  return total;
}

console.log(`Number of categories: ${totalElements(listLength)}`);

function elementsInLists(items) {
  items.forEach((item) => {
    item.classList.add("categories-items");

    const name = item.querySelector("h2");
    name.classList.add("title");
    console.log(`Category: ${name.textContent}`);

    const listInside = item.querySelector("ul");
    listInside.classList.add("list-items");

    const itemsInside = listInside.querySelectorAll("li");
    console.log(`Elements: ${totalElements(itemsInside)}`);
  })
  
}

elementsInLists(listLength);




