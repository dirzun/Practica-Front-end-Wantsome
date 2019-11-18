// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout(function(){console.log('1')},300);
  }
  
  const func2 = () => {
      setTimeout(function(){console.log('2')},200);
  }
  
  const func3 = () => {
      console.log('3');
  }
  
  const func4 = () => {
      setTimeout(function(){console.log('4')},400);
  }
  
  const func5 = () => {
      setTimeout(function(){console.log('5')},100); 
  }
  
  
  /*func1();
  func2();
  func3();
  func4();
  func5();*/
  





  //tema 2
// 1
/*
Write a function that accepts 3 params(1 - array, 2 - function, 3 - function). 
- first param defines an array of items: ex: an array of rooms:  ['bedroom', 'bathroom', 'lounge']
- second param defines an action that has to be executed for each item - ex: I want to clean the house, I want to display in console 'I cleaned x', 'I cleaned y', 'I cleaned z', for each room
- third param defines an action that has to be executed at the end, when I finished doing the action for each item - ex: I want to print 'yey, now I can drink and play games!'
*/
const fisrtFn = value => console.log(value);
const seconFn = () => console.log("'yey, now I can drink and play games!'");
const oFuncite = (param1,firstFunction,secondFunction)=>{
for (let i=0; i < param1.length; i++){
    const toDisplay = `I cleaned ${param1[i]}`;
    firstFunction(toDisplay);
}
secondFunction();
}
//oFuncite(['bedroom', 'bathroom', 'lounge'],fisrtFn,seconFn);






// 2

function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Now translate the upper function to ES6 syntax

const increment = a =>{
  return ++a;
}
const double = b =>{
  return b*2;
}
const square = c =>{
  return c*c;
}
//console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
//console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
//console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


// 3


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(parametru1, func2) {
  var filteredArray = [];
  for (var i = 0; i < parametru1.length; i++) {
    var b = parametru1[i];
    if (func2(b)) {
      filteredArray.push(b);
    }
  }
  return filteredArray;
};
const arrai =[2,3,-2,3,5,9,-8,-8,3,4,5,6,9];


//Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
//filters the odd items
const oddnum = a =>{
  if (a%2 === 1){
    return a;
  }; 
}
//console.log(filter(arrai,oddnum));

//divisibil 3
const div3 = b =>{
  if (b % 3 === 0){
    return b;
  };
}
//console.log(filter(arrai,div3));



const removeDuplicates = array => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
      if (newArray.indexOf(array[i]) == -1) {
          newArray.push(array[i])
      }
  }
  return newArray;
};
//console.log(filter(arrai,removeDuplicates));



//Now translate the upper function to ES6 syntax


// 4 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error

The function should be written directly into ES6 specific syntax
*/
const ob1 ={
  status : "succes"};
const ob2 = {
  status : "error"
};

const multipleCallbacks = (arg1,arg2,arg3)=>{

  if (Object.keys(arg1)[0] !== "status") {
  return "iesi afara!";
}
  if (Object.value(arg1)[0] === "succes") {
  return "succes"  ;
}
  if (Object.value(arg1)[0] === "error"){
    return "error";
  }
};

multipleCallbacks();
// 5
/*
-- FAKE DATA FETCHER --

const simulateServerCall = (url, params) {
	console.log(`Fetching data for ${params.userId} from: `, url);
	setTimeout(() => {
    console.log('Server responded with success');
    const fakeData = {
      numberOfEmployees: 4,
      employees: [
      	{
        	name: 'Employee1',
          age: 33,
          title: 'Developer',
        },
        {
        	name: 'Employee2',
          age: 28,
          title: 'Manager',
        },
        {
        	name: 'Employee3',
          age: 32,
          title: 'Tester',
        },
        {
        	name: 'Employe4',
          age: 31,
          title: 'Developer',
        },
      ]
   };
   // now what ?
  });
};

const fetchDataFor = userId => {
  simulateServerCall('https://server.com/employee', { userId: userId });
};

Adjust the upper functions so that a callback that filters the employees if they have a developer role
is executed within the setTimeout that simulates a request to the server; The callback should be implemented by you
and should print on the browser's console only the employees that are developers; 
Requirement: reuse the filtering function that you have already implemented
*/






// 6
/*
Read about setInterval here: https://www.w3schools.com/jsref/met_win_setinterval.asp
Using setInterval, implement a function called theFinalCountdown that accepts as a parameter a numeric value and counts down until 0 every 1s.
The countdown will be displayed in the console.
Ex:
theFinalCountdown(10); call will display:

10
(...after 1s)
9
(...after 1s)
8
(...after 1s)
7
...
...
0 

and then stops
*/


const theFinalCountdown = countNum =>{
  let i = countNum;
  do {
    i--;
    console.log((i+1) + "\n"+ ("(...after 1s)"));
  }
  while (i > 0);
console.log("0");
}
//theFinalCountdown(10);
