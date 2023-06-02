//                        VARIABLES

var Name = "santhosh kumar";
var Name = "santhosh";
var msg = "hello this,is my name" + Name + "Var able to reassign,redeclare";

let person = "santhosh kumar";
person = "yuvaraj"; // without variable can reassign the data
let msg1 =
  "This is your" + person + "   " + "let not able to reassign,redeclare ";
console.log(msg1);

alert(msg);

const num1 = 50;
// but num1 = 60; is not possible compare to let.
const num2 = 40;
let result = num1 + num2;
console.log(result);

/* Rules

1)no keywords used as names
2)case sensitive
3)no space , no hypen ,no (number start first)
4) use meaninful names

*/

///         DATATYPES   (js is a dynamic datatype)

let x = 10;
x = "datatye can understand automatically";

console.log(x);

//         OBJECT

let database = {
  name: "string",
  age: 23,
  gender: "male",
  address: "pillayar street,chennai-603002",
  isalive: true, // it is used to find wheather the object is running
  sibling: {
    brother1: "santho",
    brother2: "Yuvaraj",
  },
};

database.age = 25; // here the data is overrided and termination should not place

let alive = false; // out of object testing

// Dot notation
console.log(database.age);
console.log(database.sibling.brother1);

// Bracket notation
console.log(database["gender"]);

//        ARRAY

let favcolors = ["red", "green", "blue"];

favcolors[4] = "purple";

console.log(favcolors[4]);




///       FUNCTIONS

function data(){

    let id = 3456;
   var marks ="san";
   
    let result ="this is you searched" + "  "+marks ;
    console.log(result)

}
data();