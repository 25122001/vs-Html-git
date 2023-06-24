const formEl = document.querySelector("form");
const divEl = document.querySelector("form div");
const pEl = document.querySelector("form p");

//////////////////////    this is FORM  with target and this  //////////////////

formEl.addEventListener("click", (event) => {
  alert("Form");
  console.log("This phase name is:",event.target.tagName);
  console.log(`Target: ${event.target.tagName}, this: ${formEl.tagName}`);
}); // event.target is must  for target  //   formE1 is must for tagname



// //////////////////  this is DIV  without stop Bubbling   //////////////////

// divEl.addEventListener("click", () => {
//   alert("Div");   //   refer this animated link  ----->    https://domevents.dev/
// });  // this shows  "V" shape triger capturing and bubbling.


//////////////////   this is DIV  with stop Bubbling   //////////////////

divEl.addEventListener("click", (event) => {
  alert("Div");

  // Stop Bubbling
  event.stopPropagation();  // at what phase this code will stop bubbling here itself

  // Removes all active event listeners
event.stopImmediatePropagation(); // at what phase this code will stop bubbling before this  phase

});

//////////////////  this is P     //////////////////

pEl.addEventListener("click", () => {
  alert("P");
});




// To catch an event on the capturing phase
formEl.addEventListener("click", () => {}, { capture: true }); // by default false,





// Task: Catch the Capturing & Bubbling Phrase

for (let elem of document.querySelectorAll("form, form *")) 

{


  // Capturing Phase
  elem.addEventListener("click",() => {
      console.log(`Capturing Phase: ${elem.tagName}`);
    },{ capture: true });



  // Bubbling Phase
  elem.addEventListener("click", () => {
    console.log(`Bubbling Phase: ${elem.tagName}`);
  });


}
