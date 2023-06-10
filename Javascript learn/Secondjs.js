let x=10;
let y=x;
x=25;
console.log(x);  // Primitive data type [it doesnot put the reference current  data  in memory allocated]
console.log(y);  // Primitive data type

               console.log(x,y); // we can use multiple variables to access data

//////////////////////////////////////////////////////////

let x1 = { value: 5};
let y1 =x1;
x1.value =15;    
console.log(x1);// Reference  data type [it  put the reference current  data  in memory allocated]
console.log(y1);// Reference data type

/////////////////////////////////////////////////////////////////////
let cart =5;
function updatecart(cart)// it is local scope so within the function the output will be incremented.
{
    cart++;
}
updatecart(cart);
console.log("output:",cart);

//////////////////////////////////////////////////////////////////////////////

let cartobj = {
    value:5
};
function updateCart(cart1) //it is like global scope it is also refered as reference datatype
{
    cart1.value++;
}

updateCart(cartobj);
console.log("output:", cartobj);

///////////////////////////////Enumerating properties of an object///////////////////////////////////////////////

const user = {
    name:'anbu',
    getfullname()
    {
        console.log(`my name is ${this.name}`);

    }
}

for (let key in user)//usually object is not iterable only array,map is iterable.
console.log(key); 

for (let key in user)
console.log(key,user[key]); //accessing the code user[key]

for(let key of Object.keys(user))//usually object is not iterable only array,map is iterable.
console.log(key);
/////////--------->    ENTRY FUNCTION
for(let entry of Object.entries(user))//usually object is not iterable only array,map is iterable.
console.log(entry);

if ('name' in user)
{
    console.log("yes");
}