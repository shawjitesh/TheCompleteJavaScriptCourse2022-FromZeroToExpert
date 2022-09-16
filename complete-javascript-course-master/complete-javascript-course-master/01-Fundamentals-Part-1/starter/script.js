/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jitesh");
console.log(23);

let firstName = "Asmita";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let asmita_jitesh = "AJ";
let $function = 27;

let person = "jitesh";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Husband";

let job1 = "programmer";
let job2 = "husband";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jitesh");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1993;
// birthYear = 1995;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Shaw";
console.log(lastName);

// Math operators
const now = 2022;
const ageJitesh = now - 1993;
const ageAsmita = now - 1995;
console.log(ageJitesh, ageAsmita);

console.log(ageJitesh * 2, ageJitesh / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jitesh";
const lastName = "Shaw";
console.log(firstName + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJitesh > ageAsmita); // >, <, >=, <=
console.log(ageAsmita >= 18);

const isFullAge = ageAsmita >= 18;

console.log(now - 1993 > now - 1995);

const now = 2022;
const ageJitesh = now - 1993;
const ageAsmita = now - 1995;

console.log(now - 1993 > now - 1995);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJitesh + ageAsmita) / 2;
console.log(ageJitesh, ageAsmita, averageAge);

const firstName = "Jitesh";
const job = "programmer";
const birthYear = 1993;
const year = 2022;

const jitesh = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jitesh);

const newJitesh = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(newJitesh);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

const age = 7;

if (age >= 18) {
    console.log("Asmita can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Asmita is too young. Wait another ${yearsLeft} years ✌️`);
}

const birthYear = 1993;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// type conversion
const inputYear = "1993";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jitesh")); // NaN - Not a Number
console.log(typeof NaN);

console.log(String(23), 23);


// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);

// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jitesh"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

const age = "18";
if (age === 18) console.log("You just became an adult 😃 [strict]");

if (age == 18) console.log("You just became an adult 😃 [loose]");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23
    console.log(`Cool! ${favourite} is an amazing number! 😃`);
} else if (favourite === 7) {
    console.log(`${favourite} is also somewhat Cool 🙂`)
} else if (favourite === 9) {
    console.log(`${favourite} is Okay! 😐`);
} else {
    console.log(`${favourite} is so UnCool 😒`)
}

if (favourite !== 23) console.log("Why not 23?");
*/

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Asmita is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Asmita is able to drive! 😊");
} else {
    console.log("Someone else should drive...");
}