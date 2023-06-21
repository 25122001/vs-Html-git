

// Task: Show div based on click (toggle)

// .style.display = "none";  => it  is   a   js display properties

const inputContainer = document.querySelector(".input-name-container");
const showBtnEl = document.querySelector("#showBtn");

showBtnEl.addEventListener("click", () => {    
  if (inputContainer.classList.contains("hide") )  // .classList.contains("hide") => it is a property
  // we are assigning it as hide for this condition then we remove the the hide .
  //it is went to else part then the condition works (eg : it is like a switch for each click it is true and false )
  // it is not performs like a triper
   {
    showBtnEl.innerText = "Hide Div"; 
    showBtnEl.style.backgroundColor = "gray"; // for each click state is changed called transition so that we kept text,color for our understanding
    inputContainer.classList.remove("hide"); // hide in css refer
   
  }
   else 
   
   {

    inputContainer.classList.add("hide"); 
    showBtnEl.innerText = "Show Div"; 
    showBtnEl.style.backgroundColor = "royalblue";
  }
});



//  Task on fadeout/slideout transition on remove button click
