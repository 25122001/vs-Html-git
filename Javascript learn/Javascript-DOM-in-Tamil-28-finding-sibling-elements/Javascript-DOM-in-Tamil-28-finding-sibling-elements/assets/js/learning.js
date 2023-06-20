const numbers = document.querySelector("ul:last-child li");  // it is saying that the last-child is needed for the list li

console.log(numbers.innerText);

//  Any Node : Node
console.log(numbers.nextSibling); // it represents node
console.log(numbers.previousSibling); // it represents node

// Any Element Nodes : Element
console.log(numbers.nextElementSibling.innerText); // it gives data
console.log(numbers.previousElementSibling.innerText); // before 1 there is no value it returns null or error
