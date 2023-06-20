let testing = document.getElementById("idfetch");
console.log(testing.innerText);
testing.innerText = "Updated Dom"; // this is now updated in testing

/////////////////////////         OR       ///////////////////////////////////

console.log(document.getElementById("idfetch").innerText);

///////////////////////////////////////////FETCH CODE/////////////////////////

console.log(document.getElementById("idfetch"));

/*let inputfood = document.getElementById("food-item");
let inputbutton = document.getElementById("buttonclick");
inputbutton.addEventListener("click", () => {
    console.log(inputfood.innerText);
});*/  // ERROR  CODE


//    search history live example

let inputfood = document.getElementById("input-food");

let inputBtn = document.getElementById("input-btn");
let foodcontainer = document.getElementById("food-container").getElementsByClassName("food-items veg"); // .getElementsByClassName("food-items veg"); is added to get value deep
inputBtn.addEventListener("click", () => {
    console.log(inputfood.value);
    // foodcontainer.innerText="Hello" // defult output when you click save
   foodcontainer.innerHTML += `<li class = "food-item"> ${inputfood.value}</li>`; // it is overwriting  the list of food items
});

/////////// getElementsByClassName  //////////////

const foodItems = document.getElementsByClassName("food-items veg"); ///getElementsByClassName = getting multiple values 
// food-items veg => getting only veg items [if veg is not included it fetch all data in list]

console.log(foodItems[0].innerText);

//////       ---------->  very very very important    <----------------- compare with  array
console.log(foodItems);// it fetch documented data in html
let allFoods = [].map.call(foodItems, (food) => food.textContent);  // now the document becomes array object
console.log(allFoods); 

/////////// getElementsByTagsName  //////////////

const foodItemsLIST = document.getElementsByTagName("li");
console.log(foodItemsLIST);
console.log(`I have ${foodItemsLIST.length} items`);

