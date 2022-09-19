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
console.log("Assignment for Function Declarations and Expressions");

// Function Declaration
const worldPopulation = 7900000000;

let testData1 = percentageOfWorld1(200000000);
console.log(testData1);

let testData2 = percentageOfWorld1(60000000);
console.log(testData2);

let testData3 = percentageOfWorld1(100000000);
console.log(testData3);

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

console.log("-----------------");

// Function Expression
const percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

testData1 = percentageOfWorld2(200000000);
console.log(testData1);

testData2 = percentageOfWorld2(60000000);
console.log(testData2);

testData3 = percentageOfWorld2(100000000);
console.log(testData3);

console.log("====================");
console.log("Assignment for Arrow Functions");

const worldPopulation = 7900000000;
const percentageOfWorld3 = population => (population / worldPopulation) * 100;

const testData1 = percentageOfWorld3(200000000);
console.log(testData1);

const testData2 = percentageOfWorld3(60000000);
console.log(testData2);

const testData3 = percentageOfWorld3(100000000);
console.log(testData3);

console.log("====================");
console.log("Assignment for Functions Calling other Functions");

const worldPopulation = 7900000000;
const percentageOfWorld1 = population => (population / worldPopulation) * 100;

const describePopulation = (country, population) => {
    const percentageOfWorld = percentageOfWorld1(population);
    return `${country} has ${population / 1000000} million people, which is about ${percentageOfWorld}% of the world.`;
}

console.log(describePopulation("India", 200000000));
console.log(describePopulation("Finland", 60000000));
console.log(describePopulation("Singapore", 100000000));

console.log("====================");
console.log("Assignment for Introduction to Arrays");

const populations = [200000000, 60000000, 100000000, 330000000];

if (populations.length == 4) console.log(true);
else console.log(false);

const worldPopulation = 7900000000;
const percentageOfWorld1 = (population) => (population / worldPopulation) * 100;

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);

console.log("====================");
console.log("Assignment for Basic Array Operations(Methods)");

const neighbours = ["Pakistan", "Nepal", "Bhutan", "Sri Lanka"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country. 😃");
}

neighbours[neighbours.indexOf("Pakistan")] = "LOC - Parkistan";
console.log(neighbours);

console.log("====================");
console.log("Assignment for Introduction to Objects");

const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 200000000,
    neighbours: ["Pakistan", "Nepal", "Bhutan", "Sri Lanka"]
};
console.log(myCountry);

console.log("====================");
console.log("Assignment for Dot vs Bracket Notation");

const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 200000000,
    neighbours: ["Pakistan", "Nepal", "Bhutan", "Sri Lanka"]
};
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population / 1000000} million ${myCountry.language}-speanking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

console.log("====================");
console.log("Assignment for Object Methods");

const myCountry = {
    country: "India",
    capital: "Delhi",
    language: "Hindi",
    population: 200000000,
    neighbours: ["Pakistan", "Nepal", "Bhutan", "Sri Lanka"],

    describe: function () {
        return `${this.country} has ${this.population / 1000000} million ${this.language}-speanking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    checkIsIsland: function () {
        this.isIsland = this.neighbours.length == 0 ? true : false;
        return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());

console.log("====================");
console.log("Assignment for Iteration: The For Loop");

for (let rep = 1; rep <= 50; rep++) {
    console.log(`Voter number ${rep} is currently voting.`);
}

console.log("====================");
*/