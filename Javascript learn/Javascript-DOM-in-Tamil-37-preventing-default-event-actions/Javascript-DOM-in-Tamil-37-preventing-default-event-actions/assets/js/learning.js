const formEl = document.querySelector("form");
const inputEl = document.querySelector("form input");
const checkboxEl = document.querySelector("form input[type='checkbox']");

formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Stops default behaviour(any changes done by you it gives poison)
  console.log("submitted",inputEl.value,checkboxEl.checked);//.checked used to get value


//console.log("Defaultprevented:", event.defaultPrevented); //refer last line

  // Task: Validate all input fields to respective rules ()

  /* if (inputEl.value != "" ||inputEl.value.length <= 3 ||inputEl.value.length > 20)
   {
    alert("Validation Error: Name Invalid");
    return;
  }

  if (!checkboxEl.checked) {
    alert("Validation Error: Check the terms.");
    return;
  }

  console.log("Form Submitted", inputEl.value, checkboxEl.checked);

  console.log("DefaultPrevented:", event.defaultPrevented);*/ 
});     //------------> it is not working

//},{passive: true});   // you can replace the 28 th line

//line 10,30 which refresh the page after the task once completed(prventing browser default actions)
