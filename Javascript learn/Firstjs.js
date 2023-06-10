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
x = "datatype can understand automatically";

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

function data() {
  // method1

  let id = 3456;
  var marks = "san"; // which is accessed it doesnot show line

  let result = "this is you searched" + "  " + marks;
  console.log(result);
}
data();

function data1(id) {
  // method 2
  let result1 = "this is you searched" + "  " + id;
  console.log(result1);
} // function called three times
data1(3456);

data1(1234);

function data2(firstname, lastname) {
  // method 3
  let output = "this is you searched" + "  " + firstname + "  " + lastname;
  console.log(output);
}
data2("santho", "yuva");

function data3(firstname, percent) {
  // method 4
  let output = "this is you searched" + "  " + firstname + "  " + percent;
  console.log(output);
}
data3("santho", 500);

function data4(firstname, percent) {
  // method 5
  console.log(firstname + percent);
}
data4("santho", 500);

function data4(firstname, percent) {
  // method 5
  console.log(firstname + percent);
}

// adding two numbers

function add(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 ** num2);
}

add(5, 10);

//  ASSIGNMENT OPERATOR

let y = 100;
Y = y + 10; // Y += 10 is not possible //  y += 10 is possible
console.log(Y);

// ARITHMETIC OPERATOR

let test = 50;
console.log(test); // before pre-increment
console.log(++test); // at pre-increment
console.log(test); //after pre-increment
let test1 = 50;
console.log(test1++); // at post-increment
console.log(test1); //after post-increment

let test2 = 5;
console.log(--test2); //at pre-decrement
console.log(test2); // after pre-decrement
console.log(test2--); //at pre-decrement
console.log(test2); // after pre-decrement

//     COMPARISON OPERATOR

let com = 4;
console.log(com < 5);
console.log(com <= 1);
console.log(com === 4); // strict Equality operator
console.log("com" === 4); //------------->   careful when comparison and equality
console.log(com == 4); // lose equality operator
console.log("com" == 4); //------------->   careful when comparison and equality
console.log(com !== 4); // not equality operator
console.log("santhosh" > "kumar"); // it taken as dictionery
console.log("5" > 8); // javascript is too smart the character is knew as number
console.log(true == 1); // 1=true, 0=false ;

//      TERNARY OPERATOR

let age = 24;
let type = age > 18 ? "adult ticket" : "child ticket"; // note termination should not use here
console.log(type);

//      Logical operator

let highincome = true;
let cibilscore = true;
let loanstatus = highincome && cibilscore;
let applicationstatus = !loanstatus;
console.log("Loan status: " + loanstatus);
console.log("application status:" + applicationstatus);

// logical operator with non-boolean values
/*     RULES 

<-----------FALSY--------->  


 1)nan(not a number)
 2)false
 3)undefined
 4)0
 5)'',->,""
---------------------------
<--------TRUTY------------->

1)anything which is not false it is truthy.*/

let color1 = undefined;
let color2 = "blue";
let selectedcolor = color1 || color2; // note termination should not use here
console.log(selectedcolor);

//   IF CONDITION

let verify = 10;

if (verify < 20) {
  console.log("condition:correct");
  console.log("it is possible to give two output");
} else console.log("condition:incorrect"); // without curly braces it can execute when it gives single output

// example 2
let raining = true;
let cloudy = false;
if (raining || cloudy) console.log("don't forget to take umberalla");
else console.log("good wheather");

//   example 3

let hrs = new Date();
let hour = hrs.getHours();
// let hour =new Date().getHours();
if (hour >= 0 && hour <= 12) {
  console.log("goodmorning");
} else if (hour > 12 && hour <= 16) {
  console.log("good afternoon");
} else hour > 16 && hour <= 24;
{
  console.log("good evening");
} //also see second.js enumerating concept


//    SWITCH CASE

let grade = "D";              //METHOD 1
switch(grade)
{
  case "S":
    console.log("you got S grade");
    break;

  case "A":
    console.log("you got A grade");
    break;

  case "B":
    console.log("you got B grade");
    break;

  case "C":
    console.log("you got C grade");
    break;

case "D":
case "E":
  console.log("you got fail");
  console.log("you need to Reappear");
  break;

  default :
  console.log("UNKNOWN GRADE");

}

let marks = 70;   //method 2
switch(true){
  case marks<50 :
    console.log("fail");
    break;
  case marks>=50  && marks <=89:
    console.log("good.improve yourself")  // always make the order of value either in ascending nor descending
    break;

  case marks>=90:
    console.log("Excellent")
    break;

  default :
  console.log("NOT APPLICABLE NUMBER")
}


//               LOOPING


for(let i =0 ; i<=5 ; i++)   //intiate with let 
{
  console.log(i);
}
//////////////////////////////////////////////////
for (let i=0 ;i<=10 ;i++)                //FOR LOOP
{
  if(i%2 !== 0)
  {
    console.log("print odd numbers",i);
  }
}

///////////////////////////////////////////////

const studentdata = {                 

  stuname : "ram",         // This is OBJECT
  stuid : 1234,
  sex: "male"

};                                            

for(let key in studentdata)     //FOR IN LOOP    
{
  console.log(key + ":",studentdata[key]);    //using bracket notation
}
///////////////////////////////////////////////////


const colour = ['red','blue','green'];     // This is array
for (let key in colour){                   //FOR IN LOOP    
  console.log(key + ":", colour [key]);    //array takes position as object name
}

//////////////////////////////////////////////////

let colour1 = ['red','blue','green'] ; 
for(let anonymous of colour)   //FOR OF LOOP  
{
  console.log("color values:"+ "  "+anonymous);
}

///////////////////////////////////////////////////

let i=10                     //WHILE LOOP
while(i>=1)
{
 if(i%2 ==0)

 {
  console.log("print even numbers",i);
 }
 i--;
}

////////////////////////////////////////////////////

let z = 5;                   //DO WHILE LOOP

do{
  console.log(z);
  z++;
}
while(z<10);

////////////////////////////////////////////////////

 
let studata2 =
{
 age: 24,
 name1 : "santhosh kumar",
 City : "chennai",
 state : "Tamil nadu",
 interest: ['creating,teaching new things.'],
 isalive: true,
 address: {
  city: "chennai",
  state: "Tamilnadu",
 },
 
};

console.log(studata2.state);


//////////////////////////////////////////////////////////////////////////

let studata3 =               // Recommended oops function
{
 age: 24,
 name1 : "santhosh kumar",
 City : "chennai",
 state : "Tamil nadu",
 interest: ['creating,teaching new things.'],
 isalive: true,
 address: {
  city: "chennai",
  state: "Tamilnadu,India",
 },
 greeting: function(){
  let msg = `My name is ${name1}, i love ${interest}`;
  console.log(msg);
 }
 
};
console.log(studata3.address.state);





//////////////////////////////////////////////////////////////////////////

///OOOPS CONCEPT



let age1 = 24;
let name2 = "SANTHOSH KUMAR";
 
 let interest =  ['creating,teaching new things.'];
 
 let address = {
  city: "chennai",
  state: "Tamilnadu",
 }

 function greeting1(){

  //let msg = "My name is" + name2 +",i love"+ interest;  /// THE SAME OUTPUT WILL GIVE
  let msg = `My name is ${name2}, i love ${interest}`;
  console.log(msg);

 }

 greeting1();



 /////////////////////////////////////


  //         ---------------------------FACTORY  FUNCTIONS---------------------------------------          //

 function createPerson(name)
 {
 return {
    name,  // creating name dynamically
    
    greeting()
    {
      let msg = `My name is ${this.name}`;
      console.log(msg);
    }

  };
  
 }
 let dynamicname =createPerson("SK");
 let dynamicname2 = createPerson("SKS");
 dynamicname.greeting();
 dynamicname2.greeting();


   //         ---------------------------Constructor  FUNCTIONS---------------------------------------          //

   function Candidate(name){     // all constructor name should be in pascal case
    this.name = name;
    this.greeting = function()   // Candidate.length = type in browser console it will fetch the paramater length.
    {
      console.log(`My name is ${this.name}`);
    }
    
   }

   let candidate = new Candidate("santhosh")   // a new memory allocation for object
/*Candidate.call({}, "SANTHOSH","37")
   Candidate.apply({},["SANTHOSH","37"])*/   // by using call and apply inbuilt methods we can also use to get ouput instead of allocating new method (Note: dont try just for knowledge)
   candidate.greeting();





   //         ---------------------------Dynamic Object--------------------------------------          //

   const person3 = {
     
    name: "Anbu"
   }

   person3.age = 24;
   person3.greeting2 = function(){}
   delete person3.greeting2; /// here we delete the greeting also we can  delete,add,edit no of data under the object variable


   console.log(person3);

   /////////////////////////////////////////////////////////

//         ---------------------------String and Numeric literals--------------------------------------          //

let pername = "sumsan";
let age2 = 2;
let isalive = true;
console.log(pername,age2,isalive);


////////////////////////////////  OR   //////////////////

let pername2 = new String("sumsan2");
let age3 =new Number (2);
let Isalive = new Boolean(true)
console.log(pername2,age3,Isalive);


