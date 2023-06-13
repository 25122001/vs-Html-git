let x = 10;
let y = x;
x = 25;
console.log(x); // Primitive data type [it doesnot put the reference current  data  in memory allocated]
console.log(y); // Primitive data type

console.log(x, y); // we can use multiple variables to access data

// Primitive includes number,string,symbol,null
//////////////////////////////////////////////////////////

let x1 = { value: 5 };
let y1 = x1;
x1.value = 15;
console.log(x1); // Reference  data type [it  put the reference current  data  in memory allocated]
console.log(y1); // Reference data type
// Reference includes array,object,function

/////////////////////////////////////////////////////////////////////
let cart = 5;
function updatecart(cart) {
  // it is local scope so within the function the output will be incremented.
  cart++;
}
updatecart(cart);
console.log("output:", cart);

//////////////////////////////////////////////////////////////////////////////

let cartobj = {
  value: 5,
};
function updateCart(cart1) {
  //it is like global scope it is also refered as reference datatype
  cart1.value++;
}

updateCart(cartobj);
console.log("output:", cartobj);

///////////////////////////////Enumerating properties of an object///////////////////////////////////////////////

const user = {
  name: "anbu",
  age: 24,
  getfullname() {
    console.log(`my name is ${this.name}`);
  },
};

for (let key in user) //usually object is not iterable only array,map is iterable.
  console.log(key);

for (let key in user) console.log(key, user[key]); //accessing the code user[key]

for (let key of Object.keys(user)) //usually object is not iterable only array,map is iterable.
  console.log(key);
/////////--------->    ENTRY FUNCTION
for (let entry of Object.entries(user)) //usually object is not iterable only array,map is iterable.
  console.log(entry);

if ("name" in user) {
  console.log("yes");
}

///////////////////////////////Cloning of an object///////////////////////////////////////////////

let another = {};
for (let key in user) {
  another[key] = user[key]; //another['name'] = user['name']
  console.log(key);
}

///////////////////////////////     OR    ///////////////////////////////////////////////

let another1 = { ...user }; ///by using spread operator
console.log(another1);

////////////////////////   Finding Maximum marks   ///////////////////////////

let marks = [45, 74, 5, 35];
let result = Math.max(...marks);
console.log("Maximum marks:" + result);

////////////////////////   object and string identification   ///////////////////////////

let firstname = " Santhosh..";
let lastname = "kumar"; //typeof lastname it is in string
const firstname1 = new String("santhosh"); // typeof firstname1 it is in object

////////////////////////////////////   string functions  ///////////////////////////////////

console.log(firstname.concat(" ", lastname));
console.log(firstname.includes("oh"));
console.log(firstname.startsWith("Sa"));
console.log(firstname.endsWith("ar"));
console.log(firstname.repeat(10));
console.log(lastname.replace("kumar", "Rocky"));
console.log(firstname.slice(3));
let para = "some text";
console.log(para.split(" ", 1));
console.log(firstname.toUpperCase());
console.log(firstname.trim());
console.log(firstname.trimStart());

////////////////////////////////////   Template Literals or (backticks) ///////////////////////////////////
const info = "thank you \n for watching"; ///escape sequences
const info1 = "thank you \t for watching";
console.log(info);
const template = `without using "escape 
sequences" it is so helpful`;
console.log(template);

////////////////////////////////////  Date object ///////////////////////////////////

const cal = Date().toString(); // it is in string now
const now = new Date(); // it is in object
console.log(cal);
console.log(now.getFullYear());
const anotherDate = new Date("July 6 1996");
console.log(anotherDate.getFullYear());

let anotherDate2 = new Date();
anotherDate2.setFullYear("2000");
console.log(anotherDate2.getFullYear()); //it is in object

//////   how date is taken different countries

let [month, date, year] = new Date().toLocaleDateString("en-IN").split("/");
console.log(month, date, year);

/////////----------------------->UPTO THIS OBJECT of oops COMPLETED

////////////////////////////////////  ARRAYS of oops ///////////////////////////////////

// add ,filter, remove, split, combine  of element in  arrays

const number = ["Apple", "Lemon", "Grapes"]; ///here we used const variable the value can be updated because it is array
number[3] = "orange"; // push // unshift  // splice is introduced without declaring array location
number.push("strawberry"); //puts in last
number.push("Apple");
number.push("rotten waste");
number.pop();     // removes in last
number.unshift("guava"); // puts in first
number.unshift("rat");
number.shift();        // removes in first
number.splice(3, 0, "watermelons"); //insert location(3),delete location (0 = nothing)
console.log(number[1]);
console.log(number);
console.log(number.indexOf("Grapes")); // if only indexOf only coded the "native code" shows in console.indexOf() crt way.
// if indexOf doesnot have any have it will shows -1
console.log(number.lastIndexOf("Apple"));
const randomnumber = [1,2,3,4];
randomnumber.splice(2,1); // at index 2 ,from there delete 1 value if we delete two values ,it will delete two values.
console.log(randomnumber);

console.log(number.indexOf("red") !== -1); //[OR]
console.log(number.includes("Red"));

//////////////////////////////////// javascript reference in an array[ARRAY OF OBJECT] ///////////////////////////////////

//------------------------ important example --------------------------------------------//

const orders = [
  { id: 1, item: "smartphones", quantity: 1 },
  { id: 2, item: "Maggi", quantity: 3 },
  { id: 3, item: "GRAINS", quantity: 5 },
];

//// NORMAL FUNCTION /////

let result2 = orders.find(function (order) {
  // FETCHING THE DATA
  return order.item === "Maggi";
});
console.log(result2);

let result3 = orders.findIndex(function (order) {
  // FETCHING THE INDEX
  return order.item === "smartphones";
});
console.log("INDEX:" + result3);

//// ARROW FUNCTION ////

let result5 = orders.find((order) => {
  // FETCHING THE DATA
  return order.item === "GRAINS";
});
console.log(result5);

// [OR]ALTERNATE WAY because above program is too long

let result4 = orders.find((order) => order.item === "Maggi"); // FETCHING THE DATA
console.log(result4);

//////////////////////////////////////// EMPTYING AN ARAY ////////////////////////////////////

var numbers = [1,2,3,4];
//var numbers = [];   // first way
//numbers.length = 0; //second way
//numbers.splice(0,numbers.length); // third way
while(numbers.length)   // fourth way
{
    numbers.pop();
}
console.log(numbers);


//////////////////////////////////////// combining and extracting arrays ////////////////////////////////////

const shopping_cart = ["maagi","Beans","Masala"];   // it was in array of  primitive(strings,numbers)
const additional_cart =["matchbox","salt"];

let recipe = shopping_cart.concat(additional_cart);
console.log(recipe);

let extractinfo = recipe.slice(1,3);
console.log(extractinfo);




const shopping_cart2 = [{item:"maagi"}];   // it was in array of reference (array,object)
const additional_cart2 =["Beans","Masala","matchbox","salt"];

let recipe2 = shopping_cart2.concat(additional_cart2);
console.log(recipe2);
shopping_cart2[0].item = "Noodles";// you can notice that by using reference(pointer concept understand) all places changed into noodles
// but by using primitive once the specific place is mentioned to change

//////////////////////////////////////// Spread Opeartor ////////////////////////////////////

let recipe3 = [...additional_cart2,23,{ name:"santhosh"},...shopping_cart2];
console.log(recipe3);  // spread operator instead of concat opeartion

for(let routine of additional_cart2) 
{
    console.log(routine);

}

for(let routine in additional_cart2)  
{
    console.log(routine,additional_cart2[routine]);

}

///////////--------------------->  FOREACH LOOP <--------------------------------------------////////////////
additional_cart.forEach( routine => {
    console.log(routine);
    
});

additional_cart2.join()