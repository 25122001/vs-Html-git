let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () => {
  const li = document.createElement("li");

  // in the file itself text and comment is appended see below

  const text = document.createTextNode(inputFood.value);
  const comment = document.createComment("Creating a li");

  // Assigning className
  li.className = "food-item";

  // append
  li.append(text); //linking the user given input with list
  li.append(comment);

  foodContainer.append(li); // it is adding in the list
});
