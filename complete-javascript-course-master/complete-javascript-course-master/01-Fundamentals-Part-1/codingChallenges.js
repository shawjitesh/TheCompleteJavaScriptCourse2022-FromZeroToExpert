/*
console.log("====================");
console.log("Coding Challenge #1");

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

console.log("====================");
console.log("Coding Challenge #2");

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}

console.log("====================");
console.log("Coding Challenge #3");

let dolphinsScore = Number(prompt("How much did Dolphins score in match #1?"));
let koalasScore = Number(prompt("How much did Koalas score in match #1?"));

let totalDolphinsScore = dolphinsScore;
let totalKoalasScore = koalasScore;

dolphinsScore = Number(prompt("How much did Dolphins score in match #2?"));
koalasScore = Number(prompt("How much did Koalas score in match #2?"));

totalDolphinsScore += dolphinsScore;
totalKoalasScore += koalasScore;

dolphinsScore = Number(prompt("How much did Dolphins score in match #3?"));
koalasScore = Number(prompt("How much did Koalas score in match #3?"));

totalDolphinsScore += dolphinsScore;
totalKoalasScore += koalasScore;

const avgDolphinsScore = totalDolphinsScore / 3;
const avgKoalasScore = totalKoalasScore / 3;

if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
    console.log("Dolphins win the trophy! 🐬");
} else if (avgDolphinsScore < avgKoalasScore && avgKoalasScore >= 100) {
    console.log("Koalas win the trophy! 🐨");
} else if (avgDolphinsScore == avgKoalasScore && avgDolphinsScore >= 100) {
    console.log("Both Dolphins & Koalas share the Winning Trophy! 🐬🏆🐨");
} else {
    console.log("No team wins!!! 😶");
}

console.log("====================");
*/