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


function data(){  // method1

    let id = 3456;  
   var marks ="san";  // which is accessed it doesnot show line
   
    let result ="this is you searched" + "  "+marks ;
    console.log(result)

}
data();


function data1(id)// method 2
{
    

     let result1 ="this is you searched" + "  "+id ;
     console.log(result1)
 
} // function called three times
data1(3456)
data1(0101) // taken as binary code
data1(1234)




function data2(firstname,lastname)// method 3
{
    
     let output ="this is you searched" + "  "+firstname+"  " + lastname;
     console.log(output)
 
}
data2("santho","yuva")


function data3(firstname,percent)// method 4
{
    
     let output ="this is you searched" + "  "+firstname+"  " + percent;
     console.log(output)
 
}
data3("santho",500)



function data4(firstname,percent)// method 5
{
    
  
     console.log(firstname + percent)
 
}
data4("santho",500)




function data4(firstname,percent)// method 5
{
    
  
     console.log(firstname + percent)
 
}

// adding two numbers

function add(num1,num2)
{
    console.log(num1+num2)
    console.log(num1 ** num2)
}

add(5,10)

//  ASSIGNMENT OPERATOR

let y = 100;
Y = y+ 10 // Y += 10 is not possible //  y += 10 is possible
console.log(Y)

// ARITHMETIC OPERATOR

let test = 50;
console.log(test);// before pre-increment
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

let com = 4
console.log(com<5);
console.log(com<=1);
console.log(com === 4); // strict Equality operator
console.log('com' === 4); //------------->   careful when comparison and equality
console.log(com == 4); // lose equality operator
console.log('com' == 4); //------------->   careful when comparison and equality
console.log(com !==4);  // not equality operator
console.log('santhosh'>'kumar'); // it taken as dictionery 
console.log('5'> 8); // javascript is too smart the character is knew as number 
console.log(true == 1); // 1=true, 0=false ;


