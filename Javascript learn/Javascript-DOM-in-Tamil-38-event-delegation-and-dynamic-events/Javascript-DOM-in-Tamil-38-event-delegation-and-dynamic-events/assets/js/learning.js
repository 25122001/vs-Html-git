const tableEl = document.querySelector("table");

let selectedId; // it is undefined know //sol ===>  selectedId = closestTr; (see below at 29 line)


tableEl.addEventListener("click", (event) => {
  const target = event.target; // super line


  const closestTr = target.closest("tr");  // closet  means  =  select same row incase any selected
  console.log("closest", target.closest("tr"));


  console.log("clicked : ", event.target); //  where you clicked it will fetched area
  // alert(`Hello ${event.target.innerText}`);  // alternate alert sol ==>  alert(`Hello ${closestTr.children[0].textContent}`);

///////////////     Ignoring TH element all.   //////////////////////////////////////////

  if (target.tagName === "TH") 
  {
  return; // Ignoring TH element.
  }

///////////////     SELECTED row and column color individually  //////////////////////////////////////////

// target.classList.add("active");
// target.style.backgroundColor = "green";
 

///////////////     SELECTED row and column color  fully  //////////////////////////////////////////

if (selectedId != undefined) {
  selectedId.classList.remove("active"); // removing previous color
}

  selectedId = closestTr;  // closet  means  =  select same row incase any selected
  closestTr.classList.add("active");  // this line gives row color to avoid if condition is give above



  alert(`Hello ${closestTr.children[0].textContent}`);
});




// Task: Show a donate page based on Toggle
document.addEventListener("click", (event) => {

  console.log(event.target.dataset.toggleId); // output:donate-form

  const id = event.target.dataset.toggleId;

  if (!id) return; // ignore all

  console.log(id);  // output:donate-form



  const el = document.getElementById(id);
  el.hidden = !el.hidden; // true --> false


});

const formEl = document.querySelector("#donate-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();// basically form event refresh frequent to avoid this, this code is introduced

  const donateAmount = event.target.querySelector("input").value;  // given input

  alert(`Thank you for donating ₹${donateAmount}.`);
});





///////////////     where you clicked  the element is notified in console       //////////////////////////////////////////

const listEl = document.querySelectorAll("form li");

listEl.forEach((li) =>  // each list is notified in forloop

 {    
  
 li.addEventListener("click", () => {
console.log("clicked", li.textContent);
});

});
console.log(listEl);