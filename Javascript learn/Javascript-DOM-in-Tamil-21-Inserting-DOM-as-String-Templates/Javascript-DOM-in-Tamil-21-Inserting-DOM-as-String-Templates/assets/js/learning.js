const foodContainerEl = document.querySelector("#food-container");


/////////////////  Inserting string  as dom continuation    ////////////////////////////////////////


const li = document.createElement("li");
li.textContent = "panner soda";
li.className = "food-item";  // this line is helpfull for applying styles
foodContainerEl.insertAdjacentElement("beforeend", li);


foodContainerEl.insertAdjacentText("beforebegin","Just Pure text without html tags");

