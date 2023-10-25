const shoppingList = ["latte", "uova", "pane", "caffe", "prosciutto"];
console.log(shoppingList);

let i = 0;
let listString = "";

while (i < shoppingList.length) {
  console.log(i);
  i++;

  const curItem = shoppingList[i];
  listString += `<li>${curItem}</li>`;
  console.log(listString)
}