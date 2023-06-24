const formEl = document.forms.feedback;
const btnEl = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

  const jsonData = JSON.stringify(Object.fromEntries(formData));

  // Send to Backend
  // 1. XMLHttpRequest (XHR)
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users/2", true);  // website linking

  xhr.onload = function () {
    const obj = JSON.parse(xhr.responseText); // converts json string into object
    document.getElementById("response").innerText = obj.data.first_name;  // output is single name displays
  };

  xhr.send();

  // 2. fetch(), axios()  // advance method
  fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
    
  })
    .then((res) => res.json()) //.then automatically sync and execute fast
    .then((data) => {
      document.getElementById("response").innerText = JSON.stringify(data.data);  //data.data => getting data from data //  multiple output displays
    });
};

formEl.addEventListener("submit", handleSubmit);
