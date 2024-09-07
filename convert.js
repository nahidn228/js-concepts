// 12 inch = 1 feet

function inchToFeet(inch) {
  const result = inch / 12;
  return result;
}
//console.log(inchToFeet(75));  //6.25

function inchToFeet2(inch) {
  const feet = inch / 12;
  const mainFeet = parseInt(feet);
  const remainInch = inch % 12;
  const result = mainFeet + " feet " + remainInch + " inch.";
  return result;
}
//console.log(inchToFeet2(75));  //6 feet 3 inch.

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

function kiloMeterToMiles(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
