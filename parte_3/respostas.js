//Stand in line
{
	function nextInLine(arr, item) {
	  // Only change code below this line
	  arr.push(item);
	  item = arr.shift();
	  return item;
	  // Only change code above this line
	}
	
	// Setup
	let testArr = [1, 2, 3, 4, 5];
	
	// Display code
	console.log("Before: " + JSON.stringify(testArr));
	console.log(nextInLine(testArr, 6));
	console.log("After: " + JSON.stringify(testArr));
}
/*------------------------------------------------------------------------------------*/

//Understanding boolean values
{
	function welcomeToBooleans() {
	  // Only change code below this line
	
	  return true; // Change this line
	
	  // Only change code above this line
	}
}
/*------------------------------------------------------------------------------------*/

//Use conditional logic with if statements
{
	function trueOrFalse(wasThatTrue) {
	  // Only change code below this line
	  if(wasThatTrue){
	    return "Yes, that was true"
	  } else {
	    return "No, that was false"
	  }
	
	
	  // Only change code above this line
	
	}
}
/*------------------------------------------------------------------------------------*/

//Comparison with the equality operator
{
	// Setup
	function testEqual(val) {
	  if (val == 12) { // Change this line
	    return "Equal";
	  }
	  return "Not Equal";
	}
	
	testEqual(10);
}
/*------------------------------------------------------------------------------------*/

//Comparison with the strict equality operator
{
	// Setup
	function testStrict(val) {
	  if (val === 7) { // Change this line
	    return "Equal";
	  }
	  return "Not Equal";
	}
	
	testStrict(10);
}
/*------------------------------------------------------------------------------------*/

//Practice comparing different values
{
	// Setup
	function compareEquality(a, b) {
	  if (a === b) { // Change this line
	    return "Equal";
	  }
	  return "Not Equal";
	}
	
	compareEquality(10, "10");
}
/*------------------------------------------------------------------------------------*/

//Comparison with the inequality operator
{
	// Setup
	function testNotEqual(val) {
	  if (val != 99) { // Change this line
	    return "Not Equal";
	  }
	  return "Equal";
	}
	
	testNotEqual(10);
}
/*------------------------------------------------------------------------------------*/

//Comparison with the strict inequality operator
{
	// Setup
	function testStrictNotEqual(val) {
	  if (val !== 17) { // Change this line
	    return "Not Equal";
	  }
	  return "Equal";
	}
	
	testStrictNotEqual(10);
}
/*------------------------------------------------------------------------------------*/

//Comparison with the greater than operator
{
	function testGreaterThan(val) {
	  if (val > 100) {  // Change this line
	    return "Over 100";
	  }
	
	  if (val > 10) {  // Change this line
	    return "Over 10";
	  }
	
	  return "10 or Under";
	}
	
	testGreaterThan(10);
}
/*------------------------------------------------------------------------------------*/

//Comparison with the greater than or equal to operator
{
	function testGreaterOrEqual(val) {
	  if (val >= 20) {  // Change this line
	    return "20 or Over";
	  }
	
	  if (val >= 10) {  // Change this line
	    return "10 or Over";
	  }
	
	  return "Less than 10";
	}
	
	testGreaterOrEqual(10);
}
/*------------------------------------------------------------------------------------*/

//Comparison with the less than operator
{
	function testLessThan(val) {
	  if (val < 25) {  // Change this line
	    return "Under 25";
	  }
	
	  if (val < 55) {  // Change this line
	    return "Under 55";
	  }
	
	  return "55 or Over";
	}
	
	testLessThan(10);
}
/*------------------------------------------------------------------------------------*/

//Comparison with the less than or equal to operator
{
	function testLessOrEqual(val) {
	  if (val<=12) {  // Change this line
	    return "Smaller Than or Equal to 12";
	  }
	
	  if (val<=24) {  // Change this line
	    return "Smaller Than or Equal to 24";
	  }
	
	  return "More Than 24";
	}
	
	testLessOrEqual(10);
}
/*------------------------------------------------------------------------------------*/

//Comparisons with the logical and operator
{
	function testLogicalAnd(val) {
	  // Only change code below this line
	
	  if (val <= 50 && val >= 25) {
	    return "Yes";
	  }
	
	  // Only change code above this line
	  return "No";
	}
	
	testLogicalAnd(10);
}
/*------------------------------------------------------------------------------------*/

//Comparisons with the logical or operator
{
	function testLogicalOr(val) {
	  // Only change code below this line
	
	  if (val < 10 || val > 20) {
	    return "Outside";
	  }
	
	  // Only change code above this line
	  return "Inside";
	}
	
	testLogicalOr(15);
}
/*------------------------------------------------------------------------------------*/

//Introducing else statements
{
	function testElse(val) {
	  let result = "";
	  // Only change code below this line
	
	  if (val > 5) {
	    result = "Bigger than 5";
	  } else {
	    result = "5 or Smaller";
	  }
	
	  // Only change code above this line
	  return result;
	}
	
	testElse(4);
}
/*------------------------------------------------------------------------------------*/

//Introducing else if statements
{
	function testElseIf(val) {
	  if (val > 10) {
	    return "Greater than 10";
	  } else if (val < 5) {
	    return "Smaller than 5";
	  } else {
	    return "Between 5 and 10";
	  }
	
	}
	
	testElseIf(7);
}
/*------------------------------------------------------------------------------------*/

//Logical order in if else statements
{
	function orderMyLogic(val) {
	  if (val < 5) {
	    return "Less than 5";
	  } else if (val < 10) {
	    return "Less than 10";
	  } else {
	    return "Greater than or equal to 10";
	  }
	}
	
	orderMyLogic(7);
}
/*------------------------------------------------------------------------------------*/

//Chaining if else statements
{
	function testSize(num) {
	  // Only change code below this line
	  if(num < 5){
	    return "Tiny";
	  } else if (num < 10) {
	    return "Small"  
	  } else if (num < 15) {
	    return "Medium"
	  } else if (num < 20) {
	    return "Large"
	  } else {
	    return "Huge"
	  }
	  // Only change code above this line
	}
	
	testSize(7);
}
/*------------------------------------------------------------------------------------*/

//Golf code
{
	const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
	
	function golfScore(par, strokes) {
	  // Only change code below this line
	  if (strokes === 1){
	    return names[0];
	  } else if (par - strokes >= 2){
	    return names[1];
	  } else if (par - strokes === 1){
	    return names[2];
	  } else if (par - strokes === 0){
	    return names[3];
	  } else if (par - strokes === -1){
	    return names[4];
	  } else if (par - strokes === -2){
	    return names[5];
	  } else if (par - strokes < - 2){
	    return names[6];
	  }
	  // Only change code above this line
	}
	
	golfScore(5, 4);
}
/*------------------------------------------------------------------------------------*/

//Selecting from many options with switch statements
{
	function caseInSwitch(val) {
	  let answer = "";
	  // Only change code below this line
	  switch(val){
	    case 1:
	      answer = "alpha";
	      break;
	    case 2:
	      answer = "beta";
	      break;
	    case 3:
	      answer = "gamma";
	      break;
	    case 4:
	      answer = "delta";
	      break;
	  }
	
	  // Only change code above this line
	  return answer;
	}
	
	caseInSwitch(1);
}
/*------------------------------------------------------------------------------------*/

//Adding a default option in switch statements
{
	function switchOfStuff(val) {
	  let answer = "";
	  // Only change code below this line
	  switch (val){
	    case 'a':
	      answer = "apple";
	      break;
	    case 'b':
	      answer = "bird";
	      break;
	    case 'c':
	      answer = "cat";
	      break;
	    default:
	      answer = "stuff";
	      break;
	  }
	
	
	  // Only change code above this line
	  return answer;
	}
	
	switchOfStuff(1);
}
/*------------------------------------------------------------------------------------*/

//Multiple identical options in switch statements
{
	function sequentialSizes(val) {
	  let answer = "";
	  // Only change code below this line
	  switch (val){
	    case 1:
	    case 2:
	    case 3:
	      answer = "Low";
	      break;
	    case 4:
	    case 5:
	    case 6:
	      answer = "Mid";
	      break;
	    case 7:
	    case 8:
	    case 9:
	      answer = "High";
	      break;
	  }
	
	
	  // Only change code above this line
	  return answer;
	}
	
	sequentialSizes(1);
}
/*------------------------------------------------------------------------------------*/

//Replacing if else chains with switch
{
	function chainToSwitch(val) {
	  let answer = "";
	  // Only change code below this line
	
	  switch (val){
	  case "bob":
	    answer = "Marley";
	    break;
	  case 42:
	    answer = "The Answer";
	    break;
	  case 1:
	    answer = "There is no #1";
	    break;
	  case 99:
	    answer = "Missed me by this much!";
	    break;
	  case 7:
	    answer = "Ate Nine";
	    break;
	  } 
	
	  // Only change code above this line
	  return answer;
	}
	
	chainToSwitch(7);
}
/*------------------------------------------------------------------------------------*/

//Returning boolean values from functions
{
	function isLess(a, b) {
	  // Only change code below this line
	  return a < b;
	  // Only change code above this line
	}
	
	isLess(10, 15);
}
/*------------------------------------------------------------------------------------*/

//Return early pattern for functions
{
	// Setup
	function abTest(a, b) {
	  // Only change code below this line
	  if (a * b < 0) return undefined;
	
	
	  // Only change code above this line
	
	  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
	}
	
	abTest(2,2);
}
/*------------------------------------------------------------------------------------*/

//Counting cards
{
	let count = 0;
	
	function cc(card) {
	  // Only change code below this line
	  switch (card){
	    case 2:
	    case 3:
	    case 4:
	    case 5:
	    case 6:
	      count++;
	      break;
	    case 10:
	    case 'J':
	    case 'Q':
	    case 'K':
	    case 'A':
	      count--;
	      break;
	  }
	
	  return count + (count > 0 ? " Bet" : " Hold");
	
	  return count;
	  // Only change code above this line
	}
	
	cc(2); cc(3); cc(7); cc('K'); cc('A');
}
/*------------------------------------------------------------------------------------*/

//Build javascript objects
{
	const myDog = {
	  // Only change code below this line
	  name:"Jackson",
	  legs:4,
	  tails:1,
	  friends:[]
	
	  // Only change code above this line
	};
}
/*------------------------------------------------------------------------------------*/

//Accessing object properties with dot notation
{
	// Setup
	const testObj = {
	  "hat": "ballcap",
	  "shirt": "jersey",
	  "shoes": "cleats"
	};
	
	// Only change code below this line
	const hatValue = testObj.hat;      // Change this line
	const shirtValue = testObj.shirt;    // Change this line
}
/*------------------------------------------------------------------------------------*/

//Accessing object properties with bracket notation
{
	// Setup
	const testObj = {
	  "an entree": "hamburger",
	  "my side": "veggies",
	  "the drink": "water"
	};
	
	// Only change code below this line
	const entreeValue = testObj["an entree"];   // Change this line
	const drinkValue = testObj["the drink"];    // Change this line
}
/*------------------------------------------------------------------------------------*/

//Accessing object properties with variables
{
	// Setup
	const testObj = {
	  12: "Namath",
	  16: "Montana",
	  19: "Unitas"
	};
	
	// Only change code below this line
	const playerNumber = 16;  // Change this line
	const player = testObj[playerNumber];   // Change this line
}
/*------------------------------------------------------------------------------------*/

//Updating object properties
{
	// Setup
	const myDog = {
	  "name": "Coder",
	  "legs": 4,
	  "tails": 1,
	  "friends": ["freeCodeCamp Campers"]
	};
	
	// Only change code below this line
	myDog.name = "Happy Coder";

}
/*------------------------------------------------------------------------------------*/

//Delete properties from a javascript objec
{
	// Setup
	const myDog = {
	  "name": "Happy Coder",
	  "legs": 4,
	  "tails": 1,
	  "friends": ["freeCodeCamp Campers"],
	  "bark": "woof"
	};
	
	// Only change code below this line
	delete myDog.tails;

}
/*------------------------------------------------------------------------------------*/

//Using objects for lookups (1)
{
	// Setup
	function phoneticLookup(val) {
	  let result = "";
	
	  // Only change code below this line
	  let lookup = {
	    "alpha":"Adams",
	    "bravo":"Boston",
	    "charlie":"Chicago",
	    "delta":"Denver",
	    "echo":"Easy",
	    "foxtrot":"Frank"
	  }
	
	  result = lookup[val];
	
	  // Only change code above this line
	  return result;
	}
	
	phoneticLookup("charlie");
}
/*------------------------------------------------------------------------------------*/

//Esting objects for properties
{
	function checkObj(obj, checkProp) {
	  // Only change code below this line
	  return obj[checkProp] != undefined ? obj[checkProp] : "Not Found";
	  // Only change code above this line
	}
}
/*------------------------------------------------------------------------------------*/

//Manipulating complex objects
{
	const myMusic = [
	  {
	    "artist": "Billy Joel",
	    "title": "Piano Man",
	    "release_year": 1973,
	    "formats": [
	      "CD",
	      "8T",
	      "LP"
	    ],
	    "gold": true
	  },
	  {
	    "artist": "Billy Joel",
	    "title": "Piano Man",
	    "release_year": 1973,
	    "formats": [
	      "CD",
	      "8T",
	      "LP"
	    ],
	    "gold": true
	  }
	];
}
/*------------------------------------------------------------------------------------*/

//Accessing nested objects
{
	const myStorage = {
	  "car": {
	    "inside": {
	      "glove box": "maps",
	      "passenger seat": "crumbs"
	     },
	    "outside": {
	      "trunk": "jack"
	    }
	  }
	};
	
	const gloveBoxContents = myStorage.car.inside["glove box"];
}
/*------------------------------------------------------------------------------------*/

//Accessing nested arrays
{
	const myPlants = [
	  {
	    type: "flowers",
	    list: [
	      "rose",
	      "tulip",
	      "dandelion"
	    ]
	  },
	  {
	    type: "trees",
	    list: [
	      "fir",
	      "pine",
	      "birch"
	    ]
	  }
	];
	
	const secondTree = myPlants[1].list[1];
}
/*------------------------------------------------------------------------------------*/

//Record collection
{
	// Setup
	const recordCollection = {
	  2548: {
	    albumTitle: 'Slippery When Wet',
	    artist: 'Bon Jovi',
	    tracks: ['Let It Rock', 'You Give Love a Bad Name']
	  },
	  2468: {
	    albumTitle: '1999',
	    artist: 'Prince',
	    tracks: ['1999', 'Little Red Corvette']
	  },
	  1245: {
	    artist: 'Robert Palmer',
	    tracks: []
	  },
	  5439: {
	    albumTitle: 'ABBA Gold'
	  }
	};
	
	// Only change code below this line
	function updateRecords(records, id, prop, value) {
	  if(prop === "tracks" && value){
	    if(records[id]["tracks"]){
	      records[id]["tracks"].push(value);
	    } else {
	      records[id]["tracks"] = [value];
	    }
	  } else {
	    if (value){
	      records[id][prop] = value;
	    } else {
	      delete records[id][prop];
	    }
	  }
	  return records;
	}
	
	updateRecords(recordCollection, 5439, 'artist', 'ABBA');
}
/*------------------------------------------------------------------------------------*/

//Iterate with javascript while loops
{
	// Setup
	const myArray = [];
	
	// Only change code below this line
	let i = 5;
	while (i > - 1){
	    myArray.push(i);
	    i--;
	}
}
/*------------------------------------------------------------------------------------*/

//Iterate with javascript for loops
{
	// Setup
	const myArray = [];
	
	// Only change code below this line
	for (let i = 1; i < 6; i++) {
	  myArray.push(i);
	}
}
/*------------------------------------------------------------------------------------*/

//Iterate odd numbers with a for loop
{
	// Setup
	const myArray = [];
	
	// Only change code below this line
	for (let i = 1; i < 10; i += 2) {
	  myArray.push(i);
	}
}
/*------------------------------------------------------------------------------------*/

//Count backwards with a for loop
{
	// Setup
	const myArray = [];
	
	// Only change code below this line
	for (let i = 9; i > 0; i -= 2) {
	  myArray.push(i);
	}
}
/*------------------------------------------------------------------------------------*/

//Iterate through an array with a for loop
{
	// Setup
	const myArr = [2, 3, 4, 5, 6];
	
	// Only change code below this line
	let total = 0;
	for (let i = 0; i < myArr.length; i++){
	    total += myArr[i];
	}
}
/*------------------------------------------------------------------------------------*/

//Nesting for loops
{
	function multiplyAll(arr) {
	  let product = 1;
	  // Only change code below this line
	  for (let i = 0; i < arr.length; i++) {
	    for (let j = 0; j < arr[i].length; j++) {
	      product *= arr[i][j];
	    }
	  }
	  // Only change code above this line
	  return product;
	}
	
	multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
}
/*------------------------------------------------------------------------------------*/

//Iterate with javascript do   while loops
{
	// Setup
	const myArray = [];
	let i = 10;
	
	// Only change code below this line
	do {
	  myArray.push(i);
	  i++;
	} while (i < 10);
}
/*------------------------------------------------------------------------------------*/

//Replace loops using recursion
{
	function sum(arr, n) {
	  // Only change code below this line
	  if (n){
	    return sum(arr, n - 1) + arr[n-1];
	  } else {
	    return 0;
	  }
	  // Only change code above this line
	}
}
/*------------------------------------------------------------------------------------*/

//Profile lookup
{
	// Setup
	const contacts = [
	  {
	    firstName: "Akira",
	    lastName: "Laine",
	    number: "0543236543",
	    likes: ["Pizza", "Coding", "Brownie Points"],
	  },
	  {
	    firstName: "Harry",
	    lastName: "Potter",
	    number: "0994372684",
	    likes: ["Hogwarts", "Magic", "Hagrid"],
	  },
	  {
	    firstName: "Sherlock",
	    lastName: "Holmes",
	    number: "0487345643",
	    likes: ["Intriguing Cases", "Violin"],
	  },
	  {
	    firstName: "Kristian",
	    lastName: "Vos",
	    number: "unknown",
	    likes: ["JavaScript", "Gaming", "Foxes"],
	  },
	];
	
	function lookUpProfile(name, prop) {
	  // Only change code below this line
	  for (let i = 0; i < contacts.length; i++){
	    if(contacts[i].firstName === name){
	      return contacts[i][prop] ? contacts[i][prop] : "No such property";
	    }
	  }
	  return "No such contact";
	  // Only change code above this line
	}
	
	lookUpProfile("Akira", "likes");
}
/*------------------------------------------------------------------------------------*/

//Generate random fractions with javascrip
{
	function randomFraction() {
	
	  // Only change code below this line
	
	  return Math.random();
	
	  // Only change code above this line
	}
}
/*------------------------------------------------------------------------------------*/

//Generate random whole numbers with javascrip
{
	function randomWholeNum() {
	
	  // Only change code below this line
	
	  return Math.floor(Math.random() * 10);
	}
}
/*------------------------------------------------------------------------------------*/

//Generate random whole numbers within a range
{
	function randomRange(myMin, myMax) {
	  // Only change code below this line
	  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
	  // Only change code above this line
	}
}
/*------------------------------------------------------------------------------------*/

//Use the parseint function
{
	function convertToInteger(str) {
	  return parseInt(str);
	}
	
	convertToInteger("56");
}
/*------------------------------------------------------------------------------------*/

//Use the parseint function with a radi
{
	function convertToInteger(str) {
	  return parseInt(str, 2);
	}
	
	convertToInteger("10011");
}
/*------------------------------------------------------------------------------------*/

//Use the conditional ternary operator (1)
{
	function checkEqual(a, b) {
	  return a == b ? "Equal" : "Not Equal";
	}
	
	checkEqual(1, 2);
}
/*------------------------------------------------------------------------------------*/

//Use multiple conditional ternary operators
{
	function checkSign(num) {
	  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
	}
	
	checkSign(10);
}
/*------------------------------------------------------------------------------------*/

//Use recursion to create a countdown
{
	// Only change code below this line
	function countdown(n){
	  if(n<=0){
	    return [];
	  } else {
	    const ret = countdown(n-1);
	    ret.unshift(n);
	    return ret;
	  }
	}
	// Only change code above this line
}
/*------------------------------------------------------------------------------------*/

//Use recursion to create a range of numbers
{
	function rangeOfNumbers(startNum, endNum) {
	  if(startNum > endNum){
	    return [];
	  } else {
	    const ret = rangeOfNumbers(startNum, endNum - 1);
	    ret.push(endNum);
	    return ret;
	  }
	};
}
/*------------------------------------------------------------------------------------*/

