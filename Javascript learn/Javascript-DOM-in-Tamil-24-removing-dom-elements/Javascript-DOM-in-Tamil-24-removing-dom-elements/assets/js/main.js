let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");


///////  ------------> 


inputBtn.addEventListener("click", () => {
  // creating li element
  let newFoodItemEl = document.createElement("li");

  let div = document.createElement("div"); //this is for list-item
  let divBtn = document.createElement("div");// this is for cancel button

  newFoodItemEl.append(div, divBtn);

// hello guru antony raj //


  // assigning textContent & className to newFoodItemEl
  div.textContent = inputFood.value;
  newFoodItemEl.className = "food-item"; //dynamically getting new data in the list

  divBtn.parentElement.setAttribute("onClick", "removeFoodItem(event)");// setattribute (it represents the  second value like href,src)
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`; //dynamically getting cancel btn in the list
  newFoodItemEl.append(divBtn);




  // appending newly created element(newFoodItemEl) to foodContainer
  foodContainer.append(newFoodItemEl);

  // resetting the inputFood value
  inputFood.value = "";
});



/////////   remove Food items  ////////////////////////////////////////////////////

function removeFoodItem(event) {

  // event.target says x icon
  const existingList = event.target.parentNode.parentNode; //.parentnode represents one step backward to parent division
  
  console.log("Removed items", event.target.parentNode.parentNode); // to see the remove items

  alert("please ensure to remove"); 
  // new way
   existingList.remove();   // calling inbuilt remove function

  // old way
  //existingList.parentNode.removeChild(existingList);
}
