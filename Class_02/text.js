// Datatype in javascript 

//  Two type of Datatypes

// . Primitive Datatype
// . non Primitive Datatype

// This is primitive datatype:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbols
// 7. BigInt

// . non Primitive Datatype
//  object

"use strick";

let name = "string ho me"; //string
let age = 22               //number
let UseCodeSpaces = true; //boolean
let saveData = null;       //null
let declearData = undefined; //undefined
let bigNumbers = 1234747558855555390920200202022n; //bigInt
let sym = Symbol("This is my symbol value"); //Symbol

console.table([name, age, UseCodeSpaces, saveData, declearData, bigNumbers, sym])


//typeof 

// . check the type of value for this  keyWord  (typeof)

console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (UseCodeSpaces));
console.log(typeof (saveData));
console.log(typeof (declearData));
console.log(typeof (bigNumbers));
console.log(typeof (sym));


//Conversion  & examples of datatypes .

// . string value change into number
let marks = "98";

console.log(marks);
console.log(typeof (marks));

let valueChangeInNumber = Number(marks);

console.log(valueChangeInNumber);
console.log(typeof (valueChangeInNumber));


// . Number value change in to string?
let price = 45000;

console.log(price);
console.log(typeof (price));

let valueChangeInString = String(price);

console.log(valueChangeInString);
console.log(typeof (valueChangeInString));


// .Boolean change in to string and number
let SignInAccount = false;

console.log(SignInAccount);
console.log(typeof (SignInAccount));

let valueChangeInNumbers = Number(SignInAccount);

console.log(valueChangeInNumbers);
console.log(typeof (valueChangeInNumbers));

//string 
let valueChangeInStrings = String(SignInAccount);

console.log(valueChangeInStrings);
console.log(typeof (valueChangeInStrings));


// . null change into string and number
let empty = null;

console.log(empty);
console.log(typeof (empty));

let valueChangeInNum = Number(empty);

console.log(valueChangeInNum);
console.log(typeof (valueChangeInNum));

//string
let valueChangeInstr = String(empty);

console.log(valueChangeInstr);
console.log(typeof (valueChangeInstr))


// . undefined change into string and number
let under = undefined;

console.log(under);
console.log(typeof (under));

let valueChangeInundefined = Number(under);

console.log(valueChangeInundefined);
console.log(typeof (valueChangeInundefined));

// . BigInt change in number
let bigNum = 1234747558855555390920200202022n;

console.log(bigNum);
console.log(typeof (bigNum));

let valueChangeInbig = Number(bigNum);

console.log(valueChangeInbig);
console.log(typeof (valueChangeInbig));

// . BigInt change in string
let bigstri = 1234747558855555390920200202022n;

console.log(bigstri);
console.log(typeof (bigstri));

let valueChangeInstri = String(bigstri);

console.log(valueChangeInstri);
console.log(typeof (valueChangeInstri));

//. symbol
const sym1 = Symbol("symbol change in string");

console.log(String(sym1));      
console.log(sym1.toString());  


// NAN
//Not a number
let notnumber = '2525abcccc' ;
let change = Number(notnumber)
console.log(change);
console.log(typeof (change));

// Note : non-primitive-datatype next class Topic
/* -------------------------------------------*****************************************------------------------------------------------------*/



