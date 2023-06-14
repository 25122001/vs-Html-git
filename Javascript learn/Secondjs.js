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

//////////////////////////////////////// joining and splitting arrays ///////////////////////////////////
//  ---------------> JOIN <---------------//  



let Routines = additional_cart2.join(", ");// automatically gives commos if we additionally puts commos (",")it will increase space
console.log(Routines);

//  ---------------> SPLIT <---------------//  

let fullname = "Santhosh Kumar";
let name1 = fullname.split(" ");
let FirstName = name1[0];
let LastName = name1[1];
console.log(`my first name is ${FirstName} and lastname 
is ${LastName}`);



let postTitle = "This is my post!".toUpperCase();
let postslug = postTitle.split(" ");
let finalslug = postslug.join("_"); // slug is known as hypen and underscore
console.log(finalslug);

//////////////////////////////////////// sorting arrays ///////////////////////////////////

const students = [3,8,1];
students.sort();  // ascending

students.sort(function(a,b){
  return b-a;
})                   // decending


students.reverse();

console.log(students);

const students1 = [
{id : 3,name2: "senthil"},
{id : 8,name2: "san"},
{id : 1,name2: "kumar"},

];

// a<b => -1
//a>b => 1
// a===b =>0

// while sorting names compare with ascii table (caps and small alpha order)

students1.sort(function(a, b){
if (a.name2 < b.name2) return -1;  // by name sorting
if(a.name2 > b.name2) return 1;
return 0;
})
console.log(students1);


students1.sort((a, b) =>{
  nameA = a.name2.toLowerCase();
  nameB = a.name2.toLowerCase();
  if (nameA < nameB) return -1;  // by name sorting
  if(nameA > nameB) return 1;
  return 0;
  })
  console.log(students1);
  



students1.sort(function(a, b){
  if (a.id < b.id) return -1;  // by id sorting
  if(a.id > b.id) return 1;
  return 0;
  })
  
  console.log(students1);


//////// Testing elements [ EVERY and SOME function ] /////////////

  const queue = [2,34,65];
  let isAllowed = queue.every(function(value,index,array){ // value, index,array is not mandatory to mention all one is enough 
    console.log(`value: ${value}`);// "every" is used (all should true satisfies condition)
                                   // "some" (any one true satisfies condition) 
    console.log("index",index);
    console.log("array",array);
     return value >= 18;

  });

  console.log("isallowed: ",isAllowed);


/// example2 

const items = [
{id: 1,name6: "mobiles", isdeliverable: true},
{id: 2,name6: "Tablets", isdeliverable: true},
{id: 3,name6: "TV", isdeliverable: false},
];

let allDeliverable = items.every(function(value){
  return value.isdeliverable == true;
});

let notDeliverable = items.some(function(value){
  return value.isdeliverable == true; // double equal to check , three equal to assign.
});

console.log("Alldeliverable", allDeliverable);
console.log("notdeliverable", notDeliverable);


//////  FILTER and FIND FUNCTION   ////////

const agepredict = [16,19,22];
let adults = agepredict.filter(function(value){
  return value >=18;

});
console.log("adults:",adults);
//ex 2////
const numberpredict = [16,19,22];
let even = numberpredict.filter(function(value){ // we can also use arrow function
  return value % 2 ==  0;

});
console.log("adults:",even);

//  ex 3 //

const cart_items =[
{id:1 , items: "Android phones", cost: "6500"},
{id:2 , items: "iphones", cost: "27000"},
{id:3 , items: "window phones", cost: "7500"},
];
   // Filter {it will fetch as array of object as ouput} 
let pricelow = cart_items.filter((value) =>  value.cost < 10000); // we can also use normal function(calling function)

console.log("low price mobiles", pricelow);


   // Find {it will fetch as first occurence object as ouput}
let pricelow2 = cart_items.find((value) =>  value.cost < 10000); // we can also use normal function(calling function)

console.log("low price mobiles", pricelow2);


//////  MAP FUNCTION   ////////

const multiplication =  [1,2,3,4,5];
let outresult = multiplication.map(function(val)
{
  return val * 3;
});
console.log(outresult);

//  ex:2

const peopledata = [
  {id:1, first_name: "santhosh", last_name: "kumar"},
  {id:2, first_name: "anbu", last_name: "selvan"},
  {id:3, first_name: "ajith", last_name: "kumar"},
];

let final = peopledata.map(function(val){
  return[val.first_name, val.last_name].join(" ");

});
console.log(final);


/// OR ///

let final2 = peopledata.map(function(val){
  let fullName = [val.first_name, val.last_name].join(" ");
    return fullName;
});
console.log(final2);

//////  CHAINING METHODS[sort,filter and map]   ////////


// normally we first done  general technique
let product_items =[
  {id:1 , title: "Android phones", cost: "6500"},
  {id:2 , title: "iphones", cost: "27000"},
  {id:3 , title: "window phones", cost: "7500"},
  ];


  ///   [using sorting  call back functions]  

  let sortByPrice = product_items.sort(function(a,b){
    return a.cost - b.cost;// ascending order(cost)
    //return b.cost - a.cost; // descending order(cost)
  });
  console.log(sortByPrice);

  let sortByTitle = sortByPrice.sort(function(a,b){
    if(a.title < b.title) return -1;//ascending order(title)
    if(a.title > b.title) return 1;//decending order(title)
    return 1;
  });
 

// only below and equal to  8000 if filtered.(using filter function)

  let filtered = sortByTitle.filter(function(value){
    return value.cost <= 8000;
  });

  let finalize = filtered.map(function(val){
    return val.title + " ₹" + val.cost;

  });
  console.log(finalize);




  /////  CHAINING METHODS [recommended]  //////// [ it is denoted by " . " a link is created and produce last task as output ]

let product_items2 =[
  {id:1 , title: "Android phones", cost: "6500"},
  {id:2 , title: "iphones", cost: "27000"},
  {id:3 , title: "window phones", cost: "7500"},
  ];


  ///   [using sorting call back functions]  

  let finalize2 = product_items2.sort(function(a,b){
    return a.cost - b.cost;
    //return b.cost - a.cost;
  }).sort(function(a,b){ // here first link
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 1;
  }).filter(function(value){  // here second link
    return value.cost <= 8000;
  }).map(function(val){    // here last link of chain
    return val.title + " ₹" + val.cost;

  });
  console.log(finalize2);



    ///// [OR] USING ARROW FUNCTION //////// 
let product_items3 =[
  {id:1 , title: "Android phones", cost: "6500"},
  {id:2 , title: "iphones", cost: "27000"},
  {id:3 , title: "window phones", cost: "7500"},
  ];
 

  let finalize3 = product_items3
  .sort((a,b)=> {
    return a.cost - b.cost;
    //return b.cost - a.cost;
  }).sort(function(a,b){ 
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 1;
  }).filter((value) => value.cost <= 8000)
  .map((val) => val.title + " ₹" + val.cost);

  
  console.log(finalize3);

