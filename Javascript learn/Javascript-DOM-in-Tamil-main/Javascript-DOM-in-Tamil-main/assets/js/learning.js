/////////////////////    normal way   //////////////////////////////////

const foodContainerEl = document.getElementById("food-container");//pointing the  ul id name

console.time(" normal way ");

for(let i =1; i<=100; i++){
  const li = document.createElement('li') // creating the new element list in the existing list
  li.textContent = `Food items: ${i}`// fetching the given input
  li.className = 'food-item'  // pointing the address for the new list

   foodContainerEl.append(li); // appending the list
}
console.timeEnd(" normal way ");

/// if we use billions of data it will struggle to fetch data so that 
///performance is reduced  to increase that  DocumentFragment is introduced  


/////////////////////////   DOCUMENT FRAGMENT      ///////////////////////////////////////////

const fragment = document.createDocumentFragment();

console.time(" fragment way ");

for(let i =1; i<=100; i++){
  const li = document.createElement('li') // creating the new element list in the existing list
  li.textContent = `Food items second : ${i}`// fetching the given input
  li.className = 'food-item'  // pointing the address for the new list

   foodContainerEl.append(li); // appending the list
}

console.timeEnd(" fragment way ");


/////////////////////////     ADDING CUSTOM multiple DATA IN LIST      ///////////////////////////////////////////

const favouritefoods =[ 
  "apple",
  "bannana",
  "cherry",
  "dragon",
];

const Fruitfragment = document.createDocumentFragment();

favouritefoods.forEach((foods) => {
  const li = document.createElement('li') 
  li.textContent = foods
  li.className = 'food-item'  

   foodContainerEl.append(li);
})


////////////////////////     ADDING CUSTOM single DATA IN LIST      ///////////////////////////////////////////

const foodContainerEl2 = document.getElementById("food-container");
const li = document.createElement("li");
li.textContent = "pakoda";
li.className = "food-item";
foodContainerEl2.prepend(li);  //prepend data push at first place
//append data push at last place  // before => the data is placed at the top of from the list
// after => the data is placed at the bottom of from the list.


/////////////////////////     OLD WAY OF DOING(insertBefore)      ///////////////////////////////////////////

// foodContainerEl2.parentNode.insertBefore(li, foodContainerEl2);  
// foodContainerEl2.parentNode.insertBefore(li, foodContainerEl2.nextSibling);  // insertafter if not available so that  "nextsibling"  is introduced


/////////////////////////     DOM as string templates      ///////////////////////////////////////////

foodContainerEl2.insertAdjacentHTML("afterbegin","anytext1");// foodcontainer begining after place anytext1 
foodContainerEl2.insertAdjacentHTML("afterend","anytext2");
foodContainerEl2.insertAdjacentHTML("beforebegin","anytext3");
foodContainerEl2.insertAdjacentHTML("beforeend","anytext4");

/// continuation in the #21 dom as string templates.