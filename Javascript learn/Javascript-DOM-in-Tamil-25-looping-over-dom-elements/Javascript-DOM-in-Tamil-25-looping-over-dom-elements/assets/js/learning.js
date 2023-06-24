const foodContainerEl = document.querySelectorAll("#food-container li");
 
 console.log(foodContainerEl.innerText);
const favouriteFood = [
  "Chicken Biriyani",
  "Mutton Biriyani",
  "Fish Biriyani",
  "Prawn Biriyani",
];


// for loop
for (let i = 0; i < favouriteFood.length; i++) {
  console.log(favouriteFood[i]);
}

// for..of
for (const item of favouriteFood) {
  console.log(item);
}

////////////////--------------------------------///////////////////////////////

const foodItems = []; // it is an empty array which gets the input value

for (let i = 0; i < foodContainerEl.length; i++) {
    console.log(foodContainerEl[i].innerText);
  foodItems.push(foodContainerEl[i].innerText);
}

console.log(foodItems);




// spread operator with for each loop

[...foodContainerEl].forEach((food) => console.log("Spread", food));


// normal way with for each loop{ node elements output}

foodContainerEl.forEach((food) => console.log("NodeLists", food));
foodContainerEl.forEach((food) => console.log("NodeLists", food.nodeType)); // nodetype 1 represents elements (https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
const newfoodvalue = [...foodContainerEl].forEach((food) => console.log("normal way:", food));


// Array.from function with for each loop

Array.from(foodContainerEl).forEach((food) => console.log("Array.From", food));
