//////////////////////////////////// TIME SETTED    each  click  is  counted for api    ///////////////////////////

 const creditBtnEl = document.querySelector("header span");

const handleCreditMsg = (event) => {
   //alert("Javascript DOM - Anbuselvan");
  console.log("Event Happening");

};

// Adding an EventListener
creditBtnEl.addEventListener("click", handleCreditMsg); // each click returns the times

// removing
setTimeout(() => {
creditBtnEl.removeEventListener("click", handleCreditMsg);
},5000);   // within the time how much time we click it will counts after that it will end




////////////////////////////////////     one  click  is  counted for api    ///////////////////////////


// const handleCreditMsg1 = (event) => {
//   alert("Javascript DOM - Anbuselvan");
//  console.log("Event Happening");

//  // removing
//  creditBtnEl.removeEventListener("click", handleCreditMsg1);

// };

// // Adding an EventListener
// creditBtnEl.addEventListener("click", handleCreditMsg1);



////////////////////////////////////  another way   one  click  is  counted for api    ///////////////////////////


// const handleCreditMsg1 = (event) => {

//  console.log("Event Happening");
// };
// // Adding an EventListener
// creditBtnEl.addEventListener("click", handleCreditMsg1, {once: true});