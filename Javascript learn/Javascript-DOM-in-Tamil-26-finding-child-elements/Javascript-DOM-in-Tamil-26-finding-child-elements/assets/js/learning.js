
//////////////////////////////            DOM TRAVERSAL       /////////////////////////////////////////

//  1) finding child
//  1) finding parent
//  1) finding sibling



//////////////////////////////            QUERY SELECTOR        /////////////////////////////////////////

const foodContainerEl = document.querySelector("#food-container");
// .children: HTMLCollections // if we updated in that list it will update automatically.
console.log(foodContainerEl.children, foodContainerEl.children.length);

// nodelist = elements(tags),attribute,text node,comment
//text node = space
//commentnode

//////////////////////////////            QUERY SELECTOR ALL       /////////////////////////////////////////


const list = document.querySelectorAll("li");
// querySelectorAll: NodeList  // wheras if nodelist is updated we need to revoke the query 


// childNodes: NodeList  // child nodes fetch  include  spaces  so that it calculates spaces = 4, data = 3. 
console.log(foodContainerEl.childNodes);

// first/firstElementChild
console.log(foodContainerEl.firstChild); // element is taken as text
console.log(foodContainerEl.firstElementChild.innerText); // inner element text is fetched

////////  ----->   How you understand and find node and element node?     <-----------------------///////////

//1) any node = node {eg: foodContainerEl.firstChild}
//1) any elementnode = node {eg: foodContainerEl.firstElementChild.innerText}


// last/lastElementChild
console.log(foodContainerEl.lastChild);
console.log(foodContainerEl.lastElementChild.innerText);

//////////////////////////////           FIND NULL       /////////////////////////////////////////


const header = document.querySelector("header");
// if you access the child which doesn't exist, it will return null.
console.log(header.firstChild);  // it returns null => firstElementChild
