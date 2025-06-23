const list = document.querySelector("#categories");
const listItem = document.querySelectorAll(".item")

const listLength = list.querySelectorAll(".item").length;

console.log(listLength);

function elementsInLists(items) {
  items.forEach((item) => {

    const name = item.querySelector("h2");
    console.log(`Category: ${name.textContent}`);

    const listInside = item.querySelector("ul");

    const itemsInside = listInside.querySelectorAll("li").length;
    console.log(`Elements: ${itemsInside}`);
  })
  
}

elementsInLists(listItem);





// list.classList.add("big-list");
//  item.classList.add("categories-items");
//  name.classList.add("title");
//  listInside.classList.add("list-items");