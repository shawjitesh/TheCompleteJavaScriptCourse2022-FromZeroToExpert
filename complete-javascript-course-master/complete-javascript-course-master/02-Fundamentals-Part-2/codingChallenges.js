"use strict";

/*
console.log("====================");
console.log("Fundamentals - Part1");
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
console.log("Coding Challenge #4");

const billAmount = Number(prompt("What is the bill amount Jitesh?"));

billAmount >= 50 && billAmount <= 300 ? console.log(`The bill was ${billAmount}, the tip was ${billAmount * 0.15}, and the total value ${billAmount + (billAmount * 0.15)}`) : console.log(`The bill was ${billAmount}, the tip was ${billAmount * 0.2}, and the total value ${billAmount + (billAmount * 0.2)}`);

console.log("====================");
*/

console.log("====================");
console.log("Fundamentals - Part2");

/*
console.log("====================");
console.log("Coding Challenge #1");

let score1 = Number(prompt("How much did Dolphins score in match #1?"));
let score2 = Number(prompt("How much did Dolphins score in match #2?"));
let score3 = Number(prompt("How much did Dolphins score in match #3?"));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(score1, score2, score3);

score1 = Number(prompt("How much did Koalas score in match #1?"));
score2 = Number(prompt("How much did Koalas score in match #2?"));
score3 = Number(prompt("How much did Koalas score in match #3?"));

const avgKoalas = calcAverage(score1, score2, score3);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas}) 🐬🏆`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win(${avgKoalas} vs ${avgDolphins}) 🐨🏆`);
    } else console.log("No team wins! 😐");
}

checkWinner(avgDolphins, avgKoalas);

console.log("====================");
console.log("Coding Challenge #2");

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) return bill * .15;
    else return bill * .2;
}
console.log(calcTip(100));

const bills = [125, 555, 44];

const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
console.log(`Total bills are: ${total}`);
*/

console.log("====================");
console.log("Coding Challenge #3");

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`Mark's BMI(${mark.BMI}) is higher than John's(${john.BMI})!`);
} else {
    console.log(`John's BMI(${john.BMI}) is higher than Mark's(${mark.BMI})!`);
}

console.log("====================");