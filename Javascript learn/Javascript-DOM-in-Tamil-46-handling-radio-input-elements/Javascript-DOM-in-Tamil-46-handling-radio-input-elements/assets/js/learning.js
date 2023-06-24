const formEl = document.forms.feedback;
const categoryEl = formEl.elements.type;

const inputCategory = document.querySelector("#input-categories");

const allCategories = [...categoryEl]; // makeing  array list

// Get Properties & Methods
console.log("Radiolist:",categoryEl); // RadioNodeList
console.log("Array:",allCategories);  // ARRAY LIST

// 1. Attributes
allCategories.forEach((category) => {  //saving data in method name category
  console.log(category.value);   // gives the list of radio values
  console.log(category.checked); // which is clicked or not it gives false
});

// 2. Events

inputCategory.addEventListener("change", (event) => {
  const checked = allCategories.find((category) => {  // allCategories.find((category)   ==>  array of radio data
    return category.checked; /// if clicked true
  });


  console.log("Selected: ", checked.value);
  console.log("Simple: ", event.target.value);
});

// // 3. Methods
// allCategories[1].select();
// allCategories[2].checked = true;


// Task:  If contribution radio button clicked, then show an alert message of "Thank you for contributing." after 1 Sec.

// inputCategory.addEventListener("change", () => {
//   const checked = allCategories.find((category) => category.checked);

///////////////////////////////////////      or  //////////////////////////////////////////


  inputCategory.addEventListener("change", (event) => {
    const checked = event.target;   // monitors wheather the option is clicked

  

  if (checked.value === "contribution") {
    setTimeout(() => {
      alert("Thank you for contributing!");
    }, 1000); //after 1000ms it will exeute
  }
});
