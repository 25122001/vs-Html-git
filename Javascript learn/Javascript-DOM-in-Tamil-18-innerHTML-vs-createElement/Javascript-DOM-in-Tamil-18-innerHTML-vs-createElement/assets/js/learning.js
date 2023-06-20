// createElement

const main = document.getElementById("main");

function createAlertviaDOM(message) {
  const div = document.createElement("div");  /// create element gives more freedom to edit[recommended]
  const textNode = document.createTextNode(message);
  // injecting textNode into div
  div.append(textNode);
  div.className = "alert";  // bringing ui
   div.style.color = "orange"; // applying style is possible
  console.log(typeof div); // difference  is given by object

  main.prepend(div); // prepend value



}
createAlertviaDOM("Hello i was created by createElement");





// innerHTML

createAlertviaTemplate("Hello i was created by innerHTML");

function createAlertviaTemplate(message) {

  // division alert  brings  ui

  // innerhtml is parsing the data only  we should not able to edit the style
  const template = ` 
    <div class="alert">   
    ${message}
    </div>
    `;
console.log(typeof template);// difference is given by string


  main.innerHTML += template; 
}


