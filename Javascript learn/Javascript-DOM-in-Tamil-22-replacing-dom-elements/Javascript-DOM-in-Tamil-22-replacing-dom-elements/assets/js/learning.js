const foodContainerEl = document.querySelector("#food-container");

////////////////////////////////////   CLONING DOM ELEMENTS    ///////////////////////////////////////////////////////////////
const duplicateEl = document.getElementById("duplicate");


//  -------------> now we are going to resync the button    <-------------------------------------///

const resyncBtn = document.getElementById("resyncBtn");

resyncBtn.addEventListener("click", () => {

//  duplicateEl.innerHTML = "";   // this line is awesome!!!!!!!!!!!!!!!!!!!!

    duplicateEl.innerHTML = "";  // this line prevents the multple data duplication it is sync in data list itself

const cloneData = foodContainerEl.cloneNode(true);   // We must declare cloned method true otherwise it will not returns the child data it returns only parent data

duplicateEl.append(cloneData);
    
})

////////////////////////////////////   REPLACING DOM ELEMENTS    //////////////////////////////////////s/////////////////////////

const sambarList = document.querySelector("#food-container :first-child"); /// for selecting specific one query selector is best

const newLi = document.createElement("li");
newLi.textContent = "Popcorn";
newLi.className = "food-item";

//--------------> new way (replaceWith) <---------------/////////////////////////
sambarList.replaceWith(newLi);

// old way (replaceChild)
//sambarList.parentNode.replaceChild(newLi, sambarList);

// old way (replaceChildren)  // before that run  we should comment the replacewith,replacechild
// foodContainerEl.replaceChildren("maagi", "eggRice");  ///  replacing with existing list with new data


// create new list   // before that run  we should comment the replacewith,replacechild
/*const maagi = document.createElement("li");
maagi.textContent = "Maagi";
maagi.className = "food-item";

const eggRice = document.createElement("li");
eggRice.textContent = "Egg rice";
eggRice.className = "food-item";

foodContainerEl.replaceChildren(maagi, eggRice);*/
