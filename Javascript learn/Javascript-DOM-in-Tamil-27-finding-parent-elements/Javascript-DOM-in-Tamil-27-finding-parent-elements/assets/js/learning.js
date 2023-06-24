const foodContainerEl = document.querySelector("#food-container li"); // queryselector gives single value

console.log(foodContainerEl.parentNode); // Finding parentNode it fetching list
console.log(foodContainerEl.parentElement.parentElement); // Finding parentElement it fetching main


//body
console.log(document.body.parentNode); // returns <html>
console.log(document.body.parentElement); // returns <html>

// dir//
console.dir(document.documentElement.parentNode); // the document node => documentelement is node (see the reference in nodetype in website)
console.dir(document.documentElement.parentElement); // null

console.log(document.nodeType); // checking nodeType

// closest(it reduce the chain search eg:foodContainerEl.parentElement.parentElement)
console.log(foodContainerEl.closest("main")); // match closest occurrence.
