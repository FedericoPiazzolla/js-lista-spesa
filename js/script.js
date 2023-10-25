const shoppingList = ["latte", "uova", "pane", "caffe", "prosciutto"];
console.log(shoppingList);

const myList = document.getElementById("my-list");

let i = 0;
let listString = "";

while (i < shoppingList.length) {
  console.log(i);

  listString = `<li>${shoppingList[i]}</li>`;
  myList.innerHTML += listString
  i++;
  console.log(listString);
}