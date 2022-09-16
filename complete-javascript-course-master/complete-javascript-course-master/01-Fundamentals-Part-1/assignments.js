/*
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
*/

console.log("====================");
console.log("Assignment for Equality Operators: == vs ===");

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");

console.log("====================");