{
//Store multiple values in one variable using javascript arrays
// Only change code below this line
const myArray = ["string", 2];
}
//-------------------------------------------------------------------------------
{
//Nest one array within another array
// Only change code below this line
const myArray = [[]];
}
//-------------------------------------------------------------------------------
{
//Access array data with indexes
const myArray = [50, 60, 70];
const myData = myArray[0];

}
//-------------------------------------------------------------------------------
{
//Modify array data with indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0]=45;
}
//-------------------------------------------------------------------------------
{
//Access multi dimensional arrays with indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
}
//-------------------------------------------------------------------------------
{
//Manipulate arrays with push method
// Setup
const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3])
// Only change code below this line

}
//-------------------------------------------------------------------------------
{
//Manipulate arrays with pop method
// Setup
const myArray = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray.pop();

// Only change code below this line

}
//-------------------------------------------------------------------------------
{{
//Manipulate arrays with shift method
// Setup
const myArray = [["John", 23], ["dog", 3]];

const removedFromMyArray = myArray.shift();
// Only change code below this line
}
}
//-------------------------------------------------------------------------------
{
//Manipulate arrays with unshift method
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Only change code below this line

}
//-------------------------------------------------------------------------------
{
//Shopping list
const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];
}
//-------------------------------------------------------------------------------
{
//Write reusable javascript with functions
function reusableFunction(){
    console.log("Hi World");
}

reusableFunction();
}
//-------------------------------------------------------------------------------
{
//Passing values to functions with arguments
function functionWithArgs(a1, a2){
    console.log(a1+a2);
}

functionWithArgs(2, 3);
}
//-------------------------------------------------------------------------------
{
//Return a value from a function with return
function timesFive(a){
    return a*5;
}

}
//-------------------------------------------------------------------------------
{
//Global scope and functions
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
}
//-------------------------------------------------------------------------------
{
//Local scope and functions
function myLocalScope() {
  // Only change code below this line
  let myVar = 10
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
}
//-------------------------------------------------------------------------------
{
//Global vs  local scope in functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
}
//-------------------------------------------------------------------------------
{
//Understanding undefined value returned from a function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum+=5;
}

// Only change code above this line

addThree();
addFive();
}
//-------------------------------------------------------------------------------
{
//Assignment with a returned value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
}
//-------------------------------------------------------------------------------

