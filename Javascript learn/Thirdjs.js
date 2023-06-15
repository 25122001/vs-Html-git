
////////////////   ----------> reduce function <--------------- //////////

//  Reduce = adding the sequence of number(collecting fund)
//  EX:1 ---> array of numbers.

const donations = [45,25,95,65,8452,200];
let totalDonations = donations.reduce(function (previousvalue, currentvalue){
    console.log("pre val:", previousvalue);
    console.log("cur val:", currentvalue);

    return previousvalue + currentvalue;
});
console.log("totalDonations",totalDonations);

// ex: 2 -----> array of objects

const shoppingcart = [
    {id:1 , item: "Android phones", cost: 6500},
    {id:2 , item: "iphones", cost: 27000},
    {id:3 , item: "window phones", cost: 7500},
    ];

    let TotalCost = shoppingcart.reduce(function(accumulator, currentval){
        
        console.log("previous value",accumulator);
        return accumulator + currentval.cost;
       
    }, 0);  // here 0 (0+6500) is intiated because it doesnot know where to start
    console.log("your total amount is:",TotalCost);




    //  [or by Extract method] [[[readabilty is easy when more complex projects]]]


    function addcost(accumulator, currentval){
        
        console.log("previous value",accumulator);
        return accumulator + currentval.cost;
       
    }  // here 0 (0+6500) is intiated because it doesnot know where to start
    let totalcost = shoppingcart.reduce(addcost, 10);
    
    console.log("your total amount is:",totalcost);

    // By using es6 or arrow function

    const es6add = (accumulator, currentval) => accumulator + currentval.cost;
    let totalcost2 = shoppingcart.reduce(es6add, 5);
    console.log("final es6 output is", totalcost2);


//  difference between sort(),filter(),map(),reduce().
 

//  SORT
const numbers = [34,4,65,12,78];//sorting error due to ascii codes
let arrange = numbers.sort(); // type in console ===> '34'.charCodeAt()  ----> it will give output for all [51,52,54,49,55]
console.log(arrange);

// FIND

let result = numbers.find((value) => { // it only shows first greater than value
    return value  > 50;  // if we use filter it will give exact output as per condition
});
console.log(result);

//  MAP

let result2 = numbers.map((value) => { 
    return value  > 50;   // condition  it just act as boolean
});
console.log(result2);

let result3 = numbers.map((value) => { 
    return value;  
});
console.log(result3);



let result4 = numbers.reduce((acc ,value) => { 
    return acc * value;  
});
console.log(result4);



/////////////////.........>   [[[[[[[[[[   MASTERING JAVASCRIPT FUNCTIONS ]]]]]]]]]]  <...............///////////////

///////////////////////   FUNCTION DECLARATION AND EXPRESSION  ///////////////////////////



    // Function declaration


let no1 = 55;   /// Global variable = any varaible outside the function(accessed by whole function)
let no2 = 44;

//addno();  // before the function  call works nice

//this function calling known as hoisting(how the calling function works)

function addno() {
    let result = no1+no2;
    console.log(result);
} //function didn't need semicolon to terminate

addno();  // after the function call works nice






//   Function Expression

//this function calling known as hoisting(how the calling function works)

//addno();  // before the function not works

const addno1 = function addno1() { // here syntax listen carefully
    let result2 = no1+no2;
    console.log(result2);
};   // but where as expression needs semicolon

addno1(); // after the function works nice

// Anonymous Function Expression

const addno2 = ()  =>  {
    let result3 = no1+no2;
    console.log(result3);
};

addno2();


///////////////////  IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// SELF INVOKING FUNCTION

(function sum(){
    let result = no1 + no2; //local varaible(any variable within the function accessed within the function)
    console.log("self invoking :",result);
})();

////////////////////   OR  /////////////////////

(function sum(no1,no2){
    let result = no1 + no2; //local varaible(any variable within the function accessed within the function)
    console.log("self invoking :",result);
})(no1,no2);

////////////////////   OR  /////////////////////

((no1,no2) => {   //it is in arrow function
    let result = no1 + no2; //local varaible(any variable within the function accessed within the function)
    console.log("self invoking :",result);
})(no1,no2);


////////////////////   OR  /////////////////////

(() => {   //it is in anonymous function
    let result = no1 + no2; //local varaible(any variable within the function accessed within the function)
    console.log("self invoking :",result);
})();

////////////////////   OR  /////////////////////
 // nested self invoking response[not recommended sometimes get confused]

 (() =>{
    let num1 = 54;
    let num2 = 7;
    let result = num1+num2;
    (function displayNumber(){
        console.log("Result:",result);

    })();

 })();


 //////////          FUNCTION ARGUMENTS      ///////////////////////////////////


let tiffen = 55;   
let lunch = 44;
let petrol = 105;
function sumexpenses() {
    let result = tiffen + lunch + petrol;
    console.log(`your total expenses :  ${result}`);
} 
sumexpenses(); 

/////////////    OR   ///////////////////

function sumexpenses1(tiffen,lunch,petrol) {
    let result1 = tiffen + lunch + petrol;
    console.log(`your total expenses :  ${result1}`);
} 
sumexpenses1(55,36,105);  //something value is passing in method is known as  ARGUMENTS

/////////////    OR   ///////////////////

function sumexpenses2(tiffen,lunch,petrol) {

    let result23 = tiffen + lunch + petrol;
    return result23;
   
} 
let result23 = sumexpenses2(55,36,15);
console.log(`your total expenses :  ${result23}`);

/////////////    OR   ///////////////////

function sumexpenses2(tiffen,lunch,petrol) {

    return tiffen + lunch + petrol; 
   
} 
let result15 = sumexpenses2(52,36,15);
console.log(`your total expenses :  ${result15}`);


/////////////    OR   ///////////////////

function sumexpenses2(tiffen,lunch,petrol) {

    return tiffen + lunch + petrol; 
   
} 
 result18 = sumexpenses2(5,3,1);
console.log(`your total expenses try :  ${result18}`);

/////////////    OR   ///////////////////

function sumexpenses2() {
let total =0;
for (let value of arguments){
    total += value;
}
    return total; 
   
} 
let result16 = sumexpenses2(52,36,15,67,45);
console.log(`your total expenses2 :  ${result16}`);


//////////////////////      REST   OPERATOR      ///////////////////////////


       // we should not confuse with spread operator because it is applicable in array but  rest operator in function. 
function sumExpenses(...expenses){
    return expenses.reduce((a,b) => a+b);
}
let result14 =  sumExpenses(65,25,74,45,28,10);
console.log(`your rest 1 st output: ${result14}` );

///////    or   ////////

function sumExpenses2(Loan, ...expenses){
    let result19 = expenses.reduce((a,b) => a+b);
    return result19 - Loan;
}
let result19 =  sumExpenses2(65,25,74,45,28,10);  // loan refers  first value (65) ,others refer as total value ==> result = total value - first value
console.log(`your rest 1 st output: ${result19}` );

/////////////////////      DEFAULT   OPERATOR      ///////////////////////////

function calculateTax(cost, tax= 25){   // if we didn't put the 18 in method the default parameter 25 works
    taxAmount = cost * (tax / 100);
    console.log(
        `total cost is : ${cost} \n\n gst of tax(${tax}%)  is : ${taxAmount} 
        \n\n Total amount is : ${cost+ taxAmount}`
    );
}
calculateTax(45,18);// here first argument is 45, second argument is 18

//////////////////////////////////////////////////////////////////////////////////////

function calculateTax2(cost,title,tax2= 25){     // as per parameter  only we have to declare otherwise the input data is mismatched output will not produce
    taxAmount2 = cost * (tax2 / 100);
    console.log(
        `total cost is : ${cost} \n\n gst of tax(${tax2}%)  is : ${taxAmount2} 
        \n\n Total amount is : ${cost+ taxAmount2}`
    );
}
calculateTax2(45,"ship"); // as per parameter  only we have to declare otherwise the input data is mismatched output will not produce


////////////////////      GETTERS AND SETTERS (Accessor properties)     ///////////////////////////

let student ={
    first_name : "santhosh",  // data properties
    last_name : "kumar",
    fullName : function (){
        return student.first_name + " " + student.last_name;
    },
};

console.log(student.fullName());


let student2 ={                    // object
    first_name : "santho",  // data properties
    last_name : "kumar",
    fullName2 : () => {
        return `${student2.first_name} ${student2.last_name}`;
    },
};

// getters = used to get data
// setters = used to set data

console.log(student2.fullName2());


/// get set implemented

let student5 = {                
    first_name : "santho",
    last_name : "kumar",
   get fullName3()  {
        return `${student5.first_name} ${student5.last_name}`;
    },
    set fullName3(value){
        let values = value.split(" ");
        console.log(values);
    },
};
student5.fullName3 = "Trisha Kannan";


console.log(student5.fullName3);


/// get set implemented using this keyword

let student6 = {                
    first_name : "santho",
    last_name : "kumar",
   get fullName3()  {
        return `${student6.first_name} ${student6.last_name}`;
    },
    set fullName3(value){
        let values = value.split(" ");
        console.log(values);
        this.first_name = values[0]; // setting first name
        this.last_name = values[1];
    },
};
student6.fullName3 = "Trisha Kannan";


console.log(student6.fullName3);


/// if one value is defined other value is undefined to prevent that a new method is introduced.

let student7 = {                
    first_name : "santho",
    last_name : "kumar",
   get fullName3()  {
        return `${student7.first_name} ${student7.last_name}`;
    },
    set fullName3(value){
        let values = value.split(" ");
        console.log(values);
        this.first_name = values[0]; 
        this.last_name = values[1] ?? ""; // new method very very important
    },
};
student7.fullName3 = "Trisha";


console.log(student7.fullName3);


///////////////////     try,throw,catch      //////////////////////////////////// 


/// if one value is defined other value is undefined to prevent that a new method is introduced.

let student8 = {                
    first_name : "san",
    last_name : "kumar",
   get fullName3()  {
        return `${student8.first_name} ${student8.last_name}`;
    },
    set fullName3(value){

        if (typeof value != "string" ){
            const err = new Error("it is not a string");
          
            return;
        } // numbers is not allowed  string is returned 

        let values = value.split(" ");
        console.log(values);
        this.first_name = values[0]; 
        this.last_name = values[1] ?? ""; 
    },
};
student8.fullName3 = 45;  // here we declared number


console.log(student8.fullName3);


///////////////////////    OR   //////////////////////

let student9 = {                
    first_name : "san9thcondition",
    last_name : "kumar",
   get fullName3()  {
        return `${student9.first_name} ${student9.last_name}`;
    },
    set fullName3(value){

        if (typeof value != "string" ){   // if(value.length <= 3) throw "Name Invalid";
            const err = new Error("it is not a string");
          
            throw err;  // throwing the error

        } // numbers is not allowed  string is returned 

        let values = value.split(" ");
        console.log(values);
        this.first_name = values[0]; 
        this.last_name = values[1] ?? ""; 
    },
};
try{
    student9.fullName3 = 45;
}
  // here we declared number
  catch(ex){
    alert(ex);
  }
console.log(student9.fullName3);

///////////////////////////////     Local scope  and Global scope

// global scope try to minimize implement where it is neccessary because it may conflicit due to usage of plugins
// so best practice try in  local scope. 
{
    let message = "Hello world" // local scope(within the function only accessed)
    console.log(message);
}


let message2 ="hello world";  // global scope
console.log(message2);

//     EX2     ///

function greetuser(){
    let message =" hello santhosh";
    console.log(message);

    if(true){
        let name ="kumar";
        console.log(name);  
    }

    for(let i=0;i<=3;i++){  // if let is not mentioned it defaultly get var variable eventhough we didn't declared var
        console.log(message+"  "+ i);
    }
}

greetuser(); 

// function within the function works or not ? exactly works good
 var username10 = "sanyuva";
function greetuser(){
    var username10 = "testing" //here same variable within the function it will overwrite the function
    let message ="hello " + username10;

log(message);

}

function log(message){
    console.log(message);

}
greetuser();