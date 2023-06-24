const formEl = document.forms.feedback;
const nameEl = formEl.elements.fullName;   // here we acesseed name so name only performs

// Get Properties & Methods
console.log(nameEl);

// 1. Attributes
nameEl.value = "santhosh";
console.log(nameEl.value);

//if below two lines  are commented  other output will runs

//  nameEl.disabled = true;  // default name set not able to change
//  nameEl.readOnly = true;  // only read is possible

// 2. Events
// focus runs when line 13 and 14 is disabled

nameEl.addEventListener("focus", () => console.log("focused!"));  // focus is defined as focus on  where you click in field area

// focus runs when line 13 and 14 is disabled

nameEl.addEventListener("blur", () => console.log("blur")); // blur is defined as blur on where you click out of field area

// once value is entered on fields it will work

nameEl.addEventListener("input", (e) =>     /// once value is entered each character gives on console 
  console.log(`You have entered: ${e.target.value}`)
);
nameEl.addEventListener("change", (e) =>  /// once value is enterd click out of field it  works
  console.log(`Changed value: ${e.target.value}`)
);

// Other events(based on input value on fullname actions will performs)

nameEl.addEventListener("cut", () => console.log("cut"));  
nameEl.addEventListener("copy", () => {
  alert("You can't copy the values");
});
nameEl.addEventListener("paste", () => console.log("paste"));




// 3. Methods
nameEl.focus();
nameEl.blur();

// these two methods automatically gives output 





// Task: Task: Create a One-way binding, when the name field changes, it should great like `Hello, {enteredInput} in real time.`

//     [Dynamically changed after typed value]

// nameEl.addEventListener("change", (event) => {  
//   document.querySelector("#nameGreet" ).innerText = `Hello ${event.target.value}, `;
// });

////////////////////////   OR [Dynamically changed while typing value]

const nameGreetEl = document.querySelector("#nameGreet");

nameEl.addEventListener("input", (event) => {  
  nameGreetEl.innerText = `Hello ${event.target.value}, `;
});


