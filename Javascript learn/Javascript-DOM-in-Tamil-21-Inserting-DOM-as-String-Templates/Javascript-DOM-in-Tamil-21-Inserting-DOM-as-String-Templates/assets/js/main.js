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
  foodContainer.append(foodItemElComment);  // joining new list  with old list

  // assigning textContent & className to newFoodItemEl
  newFoodItemEl.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";   // adding new items

  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);  // joining new list  with old list

  // resetting the inputFood value
  inputFood.value = "";

  
});

// QuerySelectors
const foodItemEl = document.querySelector("li");
