
                    // Get Elements from Form//

// const formEl = document.forms[0]; // by Index  // IT is bad practice
const formEl = document.forms.feedback; // by name



// const fullNameEl = formEl.fullName; // you can also do this.
//console.log(fullNameEl);  // by this this you must comment line 8 to 12


/////////////   OR    ////////////////////


// const fullNameEl = formEl.elements[0]; // or by index/bracket notation

const fullNameEl = formEl.elements.fullName; // or by name
const typeEl = formEl.elements.type;
const emailEl = formEl.elements.email;
const descEl = formEl.elements.description;
const termsEl = formEl.elements.terms;


console.log(fullNameEl, typeEl, emailEl, descEl, termsEl);

/////////////   OR    ////////////////////


////////// --------------->  Best wa

////////////////////////////   Object Destructing (es6 way)   //////////////////////////////////////////////////////////////////////////




const { fullName, type, email, desc, terms } = formEl.elements;

console.log(fullName, type, email, desc, terms);
