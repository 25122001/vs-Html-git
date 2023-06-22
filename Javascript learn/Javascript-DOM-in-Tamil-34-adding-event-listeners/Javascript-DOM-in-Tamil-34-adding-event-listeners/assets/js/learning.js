const creditBtnEl = document.querySelector("header span");

// (X=> bad practice) using HTML Attribute 
creditBtnEl.setAttribute(
  "onclick",
  'alert("Authored by Anbuselvan - setAttribute")'
);   //comment all then execute this



// (X => bad practice) Drawbacks - Can't accept multiple actions
creditBtnEl.onclick = function () {
  alert("Authored by Anbuselvan");
}; //comment all then execute this


function handleAuthorInfo() {
  alert("Authored by Trisha");
}


creditBtnEl.onclick = handleAuthorInfo();//comment all then execute this

// Listen for Events using `AddEventListeners`
// window.addEventListener()
// document.addEventListener()
// element.addEventListeners()

const handleCreditMsg = (event) => {
  alert("Javascript DOM - Anbuselvan");
  //console.log(event.target); // alternate //
   console.log(this);
  alert(event.type + " at " + event.currentTarget.innerHTML);
  alert("Coordinates: " + event.clientX + ":" + event.clientY);
};


creditBtnEl.addEventListener("click", handleCreditMsg); // by clicking credits text it will execute 

document.addEventListener("contextmenu", handleCreditMsg);// by righr click  text it will execute 

////  count how many times clicked in website body

document.addEventListener("click", function(){
  console.log("i have been clicked");
});

////  count double click how many times clicked in website body


creditBtnEl.addEventListener("dblclick", function(){
  console.log("dbl click count");
}); 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //(X => bad practice) Drawbacks - Can't accept multiple actions
// creditBtnEl.addEventListener("click", function(){
//   alert("first count");
// }); 

// creditBtnEl.addEventListener("click", function(){
//   alert("second count");
// });



