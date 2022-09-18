'use strict';

/*
console.log("====================");
console.log("Fundamentals - Part1")
console.log("====================");
console.log("Assignment for Values and Variables");

const country = "India";
const continent = "Asia"
let population = 20000000;

console.log(country);
console.log(continent);
console.log(population);

console.log("====================");
console.log("Assignment for Data Types");

let isIsland = false;
const language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("====================");
console.log("Assignment for let, const and var");

language = "Hindi";
// country = "Indonesia";

console.log("====================");
console.log("Assignment for Basic operators");

let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(population++);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let avgPopulation = 33000000;
console.log(population < avgPopulation);

const description = country + " is in " + continent + ", and it's " + population / 1000000 + " million people speak " + language;
console.log(description);

console.log("====================");

console.log("Assignment for Strings and Template Literals");

const country = "India";
const continent = "Asia";
let population = 20000000;
const language = "Hindi";

const description = `${country} is in ${continent}, and it's ${population / 1000000} millon people speak ${language}`;
console.log(description);

console.log("====================");
console.log("Assignment for Taking Decisions: If - Else Statements");

const country = "India";
let population = 130000000;
const avgPopulation = 33000000;

if (population > avgPopulation) {
    console.log(`${country}'s population is above average`);
} else {
    const diffInPopulation = (avgPopulation - population) / 1000000;
    console.log(`${country}'s population is ${diffInPopulation} million below average`);
}

console.log("====================");
console.log("Assignment for Type Conversion and Coercion");

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

console.log("====================");
console.log("Assignment for Equality Operators: == vs ===");

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");

console.log("====================");
console.log("Assignment for Logical Operators");

const country = prompt("What is your country's name?");
const language = prompt("Which language do you speak?");
const population = Number(prompt(`What is the population of ${country}`));
let isIsland = prompt(`Is ${country} an island?`);
if (isIsland === "yes") isIsland = true;
else isIsland = false;

if (language === "English" && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country} 😊`);
} else {
    console.log(`${country} does not meet your criteria 😞`);
}

console.log("====================");
console.log("Assignment for The Switch Statement");

const language = prompt("Which language do you speak?");

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("Most number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too 😃");
}

console.log("====================");
console.log("Assignment for The Conditional(Ternary) Operator");

const country = prompt("What is your country's name?");
let population = Number(prompt(`What is the population of ${country}?`));
const avgPopulation = 33000000;

population > avgPopulation ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

console.log("====================");
*/

// console.log("====================");
// console.log("Fundamentals - Part2")

/*
console.log("====================");
console.log("Assignment for Functions");

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population / 1000000} million people and it's capital city is ${capitalCity}.`;
}

const testData1 = describeCountry("India", 20000000, "Delhi");
console.log(testData1);

const testData2 = describeCountry("Finland", 6000000, "Helsinki");
console.log(testData2);

const testData3 = describeCountry("Singapore", 10000000, "Malaysia");
console.log(testData3);

console.log("====================");
*/