let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");

let noListEl = document.getElementById("no-list");
const foodListStatistics = document.getElementById("food-list-statistics");

const handleInputFood = () => {
  // creating li element
  let newFoodItemEl = document.createElement("li");

  let div = document.createElement("div"); //for list-item
  let divBtn = document.createElement("div");

  newFoodItemEl.append(div, divBtn);

  // assigning textContent & className to newFoodItemEl
  div.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
  newFoodItemEl.append(divBtn);

  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);

  // resetting the inputFood value
  inputFood.value = "";

  refreshUI();
};

inputBtn.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    // Undo Operations
    inputFood.value = "";
  }
});






/* this file code */
/* when you deleting from last it delete all and doesnot */


// remove Food items
function removeFoodItem(event) {
  const existingList = event.target.parentNode.parentNode;
  existingList.remove();

  refreshUI();   // refreshing ui 
}






function refreshUI() {
  foodListStatistics.innerText = `You have ${foodContainer.children.length} lists`; // counting how many list

  // if (foodContainer.children.length > 0) 
  //{
  //   //  children exist, so don't show `no-list` div
  
  //   noListEl.hidden = true;
  // } 

  //else
  
  //{

  //   // children not exist, show `no-list` div

  //   noListEl.hidden = false;
  // }

  //////////////////////////////    OR     ///////////////////////////////////////////////////////


  foodContainer.children.length > 0
    ? ((noListEl.hidden = true), (foodListStatistics.hidden = false))
    : ((noListEl.hidden = false), (foodListStatistics.hidden = true));
}
