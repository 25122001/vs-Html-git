const inputName = document.querySelector(".input-name-container input");   // another way----->    {.input-name-container > input} 

// You can get attributes value by DOT Notation
console.log(inputName.type);
console.log(inputName.id);
console.log(inputName.name);
console.log(inputName.placeholder);

const userAge = prompt("What is your age");   // otherway for alert


// Modifying the value
//inputName.value = "Trisha";  // using dom setting value attribute


inputName.setAttribute("value", "Rajini"); //using html value attribute rajini is assigned.
inputName.setAttribute("value", userAge);
const saveInt = parseInt(inputName.value, 10); //whenever we get anything from input it will be in string only even numbers..
// parseint it converts string to integer.
console.log(typeof inputName.value);
console.log(typeof saveInt);

// However, the web browser only converts the standard attributes to the DOM object’s properties.
console.log(inputName.isAlive);

// Task: Create an input field of Age, which accepts number and change it via DOM using Javascript.
// input.value = 26;
// console.log(`My age is: ${26}`);
