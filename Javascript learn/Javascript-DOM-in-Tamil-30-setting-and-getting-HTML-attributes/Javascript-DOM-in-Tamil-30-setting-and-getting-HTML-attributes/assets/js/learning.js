const inputName = document.querySelector(".input-name-container input");

// Setting the attribute
// Element.setAttribute("name", "fullName") // set the attribute with value syntax
inputName.setAttribute("value", "Rajini");

// // Getting the attribute
const isAliveDOM = inputName.getAttribute("data-is-alive");
const placeDOM = inputName.getAttribute("data-place");
console.log(isAliveDOM, placeDOM);

 console.log(inputName.attributes); // List all attributes of that element // it gives as namenodemap
 console.log(inputName.attributes[6].value); // attributes by index
 console.log(inputName.attributes.value.value); // attributes by property name (DOT Notation)
  console.log(inputName.attributes ["data-interest"].value); // attributes by bracket notation


///       check for attribute existence or not

console.log(inputName.hasAttribute("data-place")); 


// remove existing attribute

console.log(inputName.removeAttribute("data-place"));  // it will occurs only in backend

console.log(inputName.hasAttribute("data-place")); // the result will be false  because now the data is deleted


 console.log(inputName.style); // returns CSSStyleDeclaration instead of values

// // data-* attributes [ alternate way // attributes by bracket notation ]
 console.log(inputName.dataset["interest"]); // get data-* values like this.

// converting string to boolean

let workingBoolean = inputName.dataset.working ; // the "true" in output is fetching from the html code
console.log(workingBoolean);
console.log(typeof workingBoolean);


let workingBoolean1 = inputName.dataset.working == "true" ;  // =="true" represents conversion of string to boolean
console.log(workingBoolean1);
console.log(typeof workingBoolean1);

// Task: Display all attrisbutes dynamically.
for (let attr of inputName.attributes) {
  console.log(`${attr.name} is ${attr.value}`);
}
