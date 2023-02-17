//Compare scopes of the var and let keywords
{
	function checkScope() {
	  let i = 'function scope';
	  if (true) {
	    let i = 'block scope';
	    console.log('Block scope i is: ', i);
	  }
	  console.log('Function scope i is: ', i);
	  return i;
	}
}
/*------------------------------------------------------------------------------------*/

//Mutate an array declared with cons
{
	const s = [5, 7, 2];
	function editInPlace() {
	  // Only change code below this line
	  s.unshift(s.pop());
	  // Using s = [2, 5, 7] would be invalid
	
	  // Only change code above this line
	}
	editInPlace();
}
/*------------------------------------------------------------------------------------*/

//Prevent object mutation
{
	function freezeObj() {
	  const MATH_CONSTANTS = {
	    PI: 3.14
	  };
	  // Only change code below this line
	  Object.freeze(MATH_CONSTANTS);
	
	  // Only change code above this line
	  try {
	    MATH_CONSTANTS.PI = 99;
	  } catch(ex) {
	    console.log(ex);
	  }
	  return MATH_CONSTANTS.PI;
	}
	const PI = freezeObj();
}
/*------------------------------------------------------------------------------------*/

//Use arrow functions to write concise anonymous functions
{
	const magic = () => new Date();
}
/*------------------------------------------------------------------------------------*/

//Write arrow functions with parameters
{
	const myConcat = (arr1, arr2) => arr1.concat(arr2);
	
	console.log(myConcat([1, 2], [3, 4, 5]));
}
/*------------------------------------------------------------------------------------*/

//Set default parameters for your functions
{
	// Only change code below this line
	const increment = (number, value = 1) => number + value;
	// Only change code above this line
}
/*------------------------------------------------------------------------------------*/

//Use the rest parameter with function parameters
{
	const sum = (...args) => {
	  return args.reduce((a, b) => a + b, 0);
	}
}
/*------------------------------------------------------------------------------------*/

//Use the spread operator to evaluate arrays in place
{
	const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
	let arr2;
	
	arr2 = [...arr1];  // Change this line
	
	console.log(arr2);
}
/*------------------------------------------------------------------------------------*/

//Use destructuring assignment to extract values from objects
{
	const HIGH_TEMPERATURES = {
	  yesterday: 75,
	  today: 77,
	  tomorrow: 80
	};
	
	// Only change code below this line
	
	const {today, tomorrow} = HIGH_TEMPERATURES;
	
	// Only change code above this line
}
/*------------------------------------------------------------------------------------*/

//Use destructuring assignment to assign variables from objects
{
	const HIGH_TEMPERATURES = {
	  yesterday: 75,
	  today: 77,
	  tomorrow: 80
	};
	
	// Only change code below this line
	  
	const {today: highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
	
	// Only change code above this line
}
/*------------------------------------------------------------------------------------*/

//Use destructuring assignment to assign variables from nested objects
{
	const LOCAL_FORECAST = {
	  yesterday: { low: 61, high: 75 },
	  today: { low: 64, high: 77 },
	  tomorrow: { low: 68, high: 80 }
	};
	
	// Only change code below this line
	  
	const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST;
	
	// Only change code above this line
}
/*------------------------------------------------------------------------------------*/

//Use destructuring assignment to assign variables from arrays
{
	let a = 8, b = 6;
	
	
	// Only change code below this line
	[b, a] = [a, b];
}
/*------------------------------------------------------------------------------------*/

//Destructuring via rest elements
{
	function removeFirstTwo(list) {
	  // Only change code below this line
	  const [,,...shorterList] = list; // Change this line
	  // Only change code above this line
	  return shorterList;
	}
	
	const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const sourceWithoutFirstTwo = removeFirstTwo(source);
}
/*------------------------------------------------------------------------------------*/

//Use destructuring assignment to pass an object as a functions parameters
{
	const stats = {
	  max: 56.78,
	  standard_deviation: 4.34,
	  median: 34.54,
	  mode: 23.87,
	  min: -0.75,
	  average: 35.85
	};
	
	// Only change code below this line
	const half =({max, min}) => (max + min) / 2.0; 
	// Only change code above this line
}
/*------------------------------------------------------------------------------------*/

//Create strings using template literals
{
	const result = {
	  success: ["max-length", "no-amd", "prefer-arrow-functions"],
	  failure: ["no-var", "var-on-top", "linebreak"],
	  skipped: ["no-extra-semi", "no-dup-keys"]
	};
	function makeList(arr) {
	  // Only change code below this line
	  let failureItems = [];
	  for (let i= 0; i < arr.length; i++){
	    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
	  }
	  // Only change code above this line
	
	  return failureItems;
	}
	
	const failuresList = makeList(result.failure);
}
/*------------------------------------------------------------------------------------*/

//Write concise object literal declarations using object property shorthand
{
	const createPerson = (name, age, gender) => {
	  // Only change code below this line
	  return {
	    name,
	    age,
	    gender
	  };
	  // Only change code above this line
	};
}
/*------------------------------------------------------------------------------------*/

//Write concise declarative functions with es6
{
	// Only change code below this line
	const bicycle = {
	  gear: 2,
	  setGear(newGear) {
	    this.gear = newGear;
	  }
	};
	// Only change code above this line
	bicycle.setGear(3);
	console.log(bicycle.gear);
}
/*------------------------------------------------------------------------------------*/

//Use class syntax to define a constructor function
{
	// Only change code below this line
	class Vegetable {
	  constructor(name){
	    this.name = name;
	  }
	}
	// Only change code above this line
	
	const carrot = new Vegetable('carrot');
	console.log(carrot.name); // Should display 'carrot'
}
/*------------------------------------------------------------------------------------*/

//Use getters and setters to control access to an objec
{
	// Only change code below this line
	class Thermostat{
	  constructor(t){
	    this._temperature = 5/9 * (t - 32);
	  }
	
	  get temperature(){
	    return this._temperature;
	  }
	
	  set temperature(t){
	    this._temperature = t;
	  }
	}
	// Only change code above this line
	
	const thermos = new Thermostat(76); // Setting in Fahrenheit scale
	let temp = thermos.temperature; // 24.44 in Celsius
	thermos.temperature = 26;
	temp = thermos.temperature; // 26 in Celsius
}
/*------------------------------------------------------------------------------------*/

//Create a module scrip
{
	<html>
	  <body>
	    {/* <!-- Only change code below this line --> */}
	      <script type="module" src="index.js"></script>
	    {/* <!-- Only change code above this line --> */}
	  </body>
	</html>
}
/*------------------------------------------------------------------------------------*/

//Use export to share a code block
{
	const uppercaseString = (string) => {
	  return string.toUpperCase();
	}
	
	const lowercaseString = (string) => {
	  return string.toLowerCase()
	}
	
	export {lowercaseString, uppercaseString}
}
/*------------------------------------------------------------------------------------*/

//Reuse javascript code using impor
{
	import { uppercaseString, lowercaseString } from './string_functions.js';
	// Only change code above this line
	
	uppercaseString("hello");
	lowercaseString("WORLD!");
}
/*------------------------------------------------------------------------------------*/

//Use  to import everything from a file
{
	import * as stringFunctions from "./string_functions.js"
	// Only change code above this line
	
	stringFunctions.uppercaseString("hello");
	stringFunctions.lowercaseString("WORLD!");
}
/*------------------------------------------------------------------------------------*/

//Create an export fallback with export defaul
{
	export default function subtract(x, y) {
	  return x - y;
	}
}
/*------------------------------------------------------------------------------------*/

//Import a default expor
{
	import subtract from "./math_functions.js"  
	// Only change code above this line
	
	subtract(7,4);
}
/*------------------------------------------------------------------------------------*/

