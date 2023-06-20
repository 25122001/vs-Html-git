let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");
///////  ------------>    21 th video DOM (inserting)   {it is not explained you have to understand}  <--------------------------  //////
inputBtn.addEventListener("click", () => {
  // creating li element
  let newFoodItemEl = document.createElement("li");

  // creating food items comment
  let foodItemElComment = document.createComment("Food items");

  // appending comment
  foodContainer.append(foodItemElComment);

  // assigning textContent & className to newFoodItemEl
  newFoodItemEl.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);

  // resetting the inputFood value
  inputFood.value = "";

  
});

// QuerySelectors
const foodItemEl = document.querySelector("li");
