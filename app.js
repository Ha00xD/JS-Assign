// Part 1: Variables

function testVar() {
    var y = 10;
    // console.log("Inside function:", y); // Output: Inside function: 10
}
// testVar();
// console.log("Outside function:", y); // Output: Explain the output
// Variable y only can used inside function scope

// // Example for `let`
{
    let x = 20;
    // console.log("Inside block:", x); 
// # Variable x only can used inside the code bloc
}

// console.log("Outside block:", x); // Output: Explain the output

// # Variable x can't use out of the code block(block scope)

// Example for `const`
const z = 30;
// console.log("Initial value:", z); // Output: Initial value: 30
// z = 40; // Output: Explain the output

//Can't reassign variable z in Const keyword except Var,Let  

// // Part 2: Functions

function greet(name){
   console.log("Hello",name);
}
// greet("Kaung")

const greetExpression = (str) => {
   console.log(str);
}
// greetExpression("Hello World")

// (function(x,y){
//   let sum = x + y
//   console.log(sum);
// })(5,10)

// Part 3: Objects

let student = {
    name : "Kaung",
    age : 20,
    course : "JS",
}
// student()

let students = {
    name : "Kaung",
    age : 20,
    course : "JS",
    introduce(){
        console.log(`Hi I am ${this.name} and i am ${this.age} years old.`);
    }
}
// student.introduce()

const updateStudent = () => {
let student = {
    name : "Kaung",
    age : 20,
    course : "JS",
    skills : ["html","css","js"],
    gender : "male"
}
return student;
}

// console.log(updateStudent());

// Part 4: Truthy and Falsy Values

const mixedArr = [12,undefined,"Hello",0,"",true,null]

const filterTruthy = function(arr){
return arr.filter(Boolean)
}

let truthyValues = filterTruthy(mixedArr);

// console.log(truthyValues);

let x = ""
const truthyFalsy = () => {
    if(x){
        console.log(`${x} is Truthy`);
    }
    else{
        console.log(`${x} is falsy`);
    }
}

// truthyFalsy()

const isEven = (number) => {
  if(number%2 == 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}

// console.log(isEven(1));
// console.log(isEven(0));

const reverse = function(str){
 let result = ""

 for(let i = str.length - 1;i>=0;i--){
    // console.log(str[i]);
    result += str[i]
 }
return result
}
// console.log(reverse("Yair Yint Aung"));

const isLeapYear = function(year){
    if(year%400 == 0){
        return "Leap Year"
    }
    else{
        return "Not a Leap Year"
    }
}

// console.log(isLeapYear(2004));
 
// Checking Palindrome

const isPalindrome = function(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    if (result == str) {
        return true
    } else {
        return false;
    }
}

// console.log(isPalindrome("Hello"));
// console.log(isPalindrome("madam"));

// Finding Maximum Number

const numbers = [3,7,2]

const findMax = (num) => {
 return Math.max.apply(null,num)
}

// console.log(findMax(numbers));

// Counting Vowels

const countVowels = function(str) {
    const vowels = ["a","e","i","o","u","A","E","I","O","U", ];
    let count = 0;

    str.split("").forEach((char) => {
        if (vowels.includes(char)) {
            count++;
        }
    });

    return count;
}

// console.log(countVowels("Hello World"));

// Capitalizing Words

const capitalizeWords = function (str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
     
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// console.log(capitalizeWords("hello world"));




