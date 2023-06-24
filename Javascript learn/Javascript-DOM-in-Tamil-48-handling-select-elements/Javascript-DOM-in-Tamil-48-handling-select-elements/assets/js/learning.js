const formEl = document.forms.feedback;
const countryEl = formEl.elements.country;

console.log(countryEl);

///////////////////  There are five ways to get output  /////////////

// 1. Properties
countryEl.value = "IND"; // set
console.log(countryEl.value); // get

// 2. Selected Index
countryEl.selectedIndex = 2;
console.log(countryEl[2].value); //getting srilanka code

// 3. Selected DOM Element
console.log(countryEl.options[countryEl.selectedIndex].value);  //getting srilanka code
console.log(countryEl.options.selectedIndex);  //index value

// 4. Events
countryEl.addEventListener("change", (event) => {  // when changing select field it will works
  console.log(event.target.options[event.target.selectedIndex]);
  console.log( `Selected value: ${event.target.options[event.target.selectedIndex].value}`); // get value
  console.log(`Selected Text: ${event.target.options[event.target.selectedIndex].text}`); // get text
});

// 5. Options 

// 5.1 Using DOM methods [adding by value and text]
const optionEl = document.createElement("option");
optionEl.value = "FAZ";   // adding one value
optionEl.text = "South Africa";
countryEl.add(optionEl, 2);//at second index added

// // 5.2. Using the Option Constructor[adding by option]----------> RECOMMENDED
const option2 = new Option("Indonesia", "IDN");
countryEl.add(option2, 7);// any valuue is given automatically  inserts last


countryEl.remove(4); // removing 4th index

