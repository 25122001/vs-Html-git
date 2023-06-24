const formEl = document.forms.feedback;
const termsEl = formEl.elements.terms;

// Get Properties & Methods
console.log(termsEl);

//1. Attributes
termsEl.checked = true;  // default checked 
termsEl.indeterminate = true;  // not empty,checked it is shown as "-"" in checkbox
console.log(termsEl.value); //in html value set as true

//2. Events

termsEl.addEventListener("change", (event) => {
  console.log(event.target.checked); // it gives true ,false as output based on checkbox
});



// Task: Show alert on click and display some contents, and if i click ok, it should check, if not it should not check.

termsEl.addEventListener("click", (e) => {

  if (e.target.checked) 
  {
    let confirmation = confirm("Here are some terms, do you accept?");

    if (!confirmation) 
    {
      e.preventDefault();
    }
  }
  
});
