
const main = document.getElementById("main");
const division1 = document.createElement("division1");

//  creating dom elements using js

division1.className = "alert";
division1.textContent = "Food is updated";  //textContent = Works with Nodes 
const textNode = document.createTextNode("Food is updated via textnode");
division1.append(textNode);
console.log(division1);
console.log(division1, textNode);
//main.prepend(division1);//prepend is used to making the value as front
