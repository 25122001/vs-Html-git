const formEl = document.forms.feedback;
const btnEl = document.querySelector("form button");

   /// two ways to send our data  =>  Querystring and JSON


const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl); // assigning memory

  // 1. QueryString: content-type: application/x-www-form-urlencoded
  // ?fullName=Tana+Stark&type=technical-support&email=wukoma%40mailinator.com&description=Doloremque+excepteur&terms=true

  const data = [...formData.entries()]; // getting array by spread operator
  console.log(data);


  const dataString = data    // assigning 




    // .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)   //encoding key and value

    .map(([key, value]) =>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`) .join("&"); // old way of doing

  console.log("usingMap:", dataString); 


                         //////////////  OR NEW WAY  /////////


  const dataString2 = new URLSearchParams(formData).toString(); // usually it was in object and successfully converted into string

  console.log("URLSearchParams", dataString2);

//////////////////////////////////////////////////////////////////////////////////////////////////


  // 2. JSON
  const jsonData = JSON.stringify(Object.fromEntries(formData)); //Object.fromEntries(formData) ---> array in object

  // Send to Backend
  console.log("JSON BODY", jsonData);
};


formEl.addEventListener("submit", handleSubmit);
