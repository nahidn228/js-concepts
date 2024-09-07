/**
 * array has some duplicate elements
 * []
 */

const biryaniKhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(biryaniKhor) {
  let unique = [];
  for (item of biryaniKhor) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
let number = noDuplicate(biryaniKhor);

console.log(number);
