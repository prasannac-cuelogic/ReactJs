"use strict"

let theString = "Hello, My name is prasanna p. champanerkar";

// startsWith();
// endsWith();
// includes();

console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('champanerkar'));
console.log(theString.includes('prasanna'));

//Hex
console.log(0xFF);

//Binary
console.log(0b101011);

//Octal
console.log(0o543);

console.log("3", Number.isFinite(3));
console.log("-3", Number.isFinite(-3));
console.log("Infinity", Number.isFinite(Infinity));
console.log("NaN", Number.isFinite(NaN));

console.log("string", Number.isNaN('string'));

console.log("isInteger NaN", Number.isInteger(NaN));
console.log("isInteger 2", Number.isInteger(2));
console.log("isInteger -2", Number.isInteger(-2));
console.log("isInteger Infinity", Number.isInteger(Infinity));