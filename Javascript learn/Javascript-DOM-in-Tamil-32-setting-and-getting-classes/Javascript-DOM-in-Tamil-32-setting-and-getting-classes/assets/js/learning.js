const inputName = document.querySelector(".input-name-container input");

// Get
console.log(inputName);  // in this code explains  you need to see classname in console, there you will see  ==> classname: input-name-style.(refresh browser more times )
console.log(inputName.className);  // 1st output

// To overwrite className
inputName.setAttribute("class", "newClassName"); //By setattribute 
inputName.className += " newClassName2 newClassName3 newClassName4";// By append // appending these values

// console.log(inputName.classList);
for (let cssClass of inputName.classList) { // classList = inbuilt function {collection of arrays}
  console.log(cssClass); // 2nd output
}

// Manipulations
console.log(inputName.classList.length);  

inputName.classList.add("5class");
console.log(inputName.classList.value);  




console.log(inputName.classList.contains("newClassName")); // class is there or not

///////////    REPLACE     ////////////
console.log(inputName.classList.replace("newClassName4", "newClassName44"));
console.log(inputName.classList.value); 


///////////    REMOVE    ////////////
inputName.classList.remove("newClassName2");
console.log("removed:",inputName.className);


inputName.classList.toggle("5classes"); // toggle  = which acts a switch "if given value is previous list it will not insert new value,if not it will insert new value"
console.log(inputName.classList.value);



setTimeout(() => {
  inputName.classList.toggle("5fool");
}, 5000);

 console.log(inputName.classList.value);// it will displays the value in  browser default code after 5000 seconds





// Task: Show div based on click (toggle)

// .style.display = "none";  => it  is   a   js display properties

const inputContainer = document.querySelector(".input-name-container");
const showBtnEl = document.querySelector("#showBtn");

showBtnEl.addEventListener("click", () => {    // dont confuse it is nothing but we are making as true then if blocks will run on next click already it was true so else block will executes
  // because already it was true so why we need to make as true.
  // simple definition if IF condition executes then it waits in else condition it doesn't came out from loop.
  if (inputContainer.style.display === "none")   // we are assigning the container as none ///
   {
    // for each click state is changed called transition so that we kept text,color for our understanding
    showBtnEl.innerText = "Hide Div"; // text changing
    inputContainer.style.display = "block"; // block = visible

    showBtnEl.style.backgroundColor = "gray";//color changing
  }
   else 
   
   {
    inputContainer.style.display = "none"; // none = not visible
    showBtnEl.innerText = "Show Div"; // .style.display = "none";  => it  is   a   js display properties


    showBtnEl.style.backgroundColor = "royalblue";
  }
});
