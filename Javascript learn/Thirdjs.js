
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
