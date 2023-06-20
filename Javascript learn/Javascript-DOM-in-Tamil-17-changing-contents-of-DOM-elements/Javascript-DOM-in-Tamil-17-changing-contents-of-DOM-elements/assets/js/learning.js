

// ---------------------------
// Modify alert content
/* 
These are setter/getter
- innerHTML
- innerText // Works with Elements
- textContent // Works with Nodes 
*/

const alertEl = document.querySelector(".alert .alert-message"); // https://jsben.ch/8tEs3 // Check benchmark here


// setting
alertEl.innerText =
  "✅ Successful! Hello, i've been modified!";
alertEl.innerHTML =
  "✅ Successful! Hello, i've been modified!";
alertEl.textContent =
  "✅ Successful! Hello, i've been modified!";

  // how to get existing contents
console.log(alertEl.innerText);
console.log(alertEl.innerHTML);
console.log(alertEl.textContent);

