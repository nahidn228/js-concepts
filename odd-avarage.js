/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

let oddNum = [];
function oddAverage(arrayNumbers) {
  for (number of arrayNumbers) {
    if (number % 2 === 1) {
      //sum = sum + number;
      oddNum.push(number);
    }
  }

  let sum = 0;
  for (const number1 of oddNum) {
    sum = sum + number1;
  }
  const count = oddNum.length;
  const avg = sum / count;
  return avg;
}

let arrayNum = oddAverage([42, 13, 58, 65, 81, 96, 7]);
console.log(arrayNum);


