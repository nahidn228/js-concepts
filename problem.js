//quiz
/*What does the following JavaScript code snippet output? (The code snippet might seem unknown to you. no worries. Just run the code in the browser console and find out the result) */

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    //console.log(i);
  }, 100);
}

//console.log(Math.pow(2, 3));

//console.log(Math.round(7.004))

let a = 5; // number
let b = "hello"; // string

[a, b] = [b, a];

console.log(a); // "hello"
console.log(b); // 5

console.log(Math.ceil(0.95));

function gunVag(a) {
  if (a % 2 === 1) {
    return a * 2;
  } else {
    return a / 2;
  }
}
console.log(gunVag(3));
