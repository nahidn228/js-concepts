/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.

Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2


sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0

Task-3:
Write a function to count the number of vowels in a string.

Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer
sample-output: Programming

Task-5:
Generate a random number between 10 to 20.
*/

/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/
function convertTemp(Celsius) {
  result = (Celsius * 9) / 5 + 32;
  return result;
}
//console.log(convertTemp(3));

/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/
let count = 0;
let newArray = [];
function arrayNumbers(numbers) {
  for (number of numbers) {
    //console.log(number);
    if (newArray.includes(number) === false) {
      count = newArray.push(number);
    }
  }
  // count = newArray.length;
  return count;
}

let numbers = arrayNumbers([5, 6, 11, 12, 98, 5]);
//console.log(numbers);

/*
Task-3:
Write a function to count the number of vowels in a string.
*/
let count1 = 0;
let uniq = [];
let vowels = "aeiouAEIOU";
function checkVowels(string) {
  //console.log(string.slice(" "));

  for (vowel of string) {
    if (uniq.includes(vowel) === false) {
      uniq.push(vowel);
    }
  }
}
console.log(checkVowels("I am learning Programming"));

/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/

/*
Task-5:
Generate a random number between 10 to 20.
*/
