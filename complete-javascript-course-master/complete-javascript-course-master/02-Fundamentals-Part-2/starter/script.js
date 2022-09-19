'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 🙂");

// const interface = "Audio";
// const private = 534;


function logger() {
    console.log("My name is Jitesh");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


// Function declaration
const age1 = calcAge1(1993);
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1993);

console.log(age1, age2);

// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUnitlRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUnitlRetirement(1993, "Jitesh"));
console.log(yearsUnitlRetirement(1995, "Asmita"));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUnitlRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired! 🎉`);
        return -1;
    }
}

console.log(yearsUnitlRetirement(1993, "Jitesh"));
console.log(yearsUnitlRetirement(1800, "Mayuri"));

const friend1 = "Raktim";
const friend2 = "Harsh";
const friend3 = "Karni";

const friends = ["Raktim", "Harsh", "Karni"];
console.log(friends);

const y = new Array(1993, 1995, 2019, 2022);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Shubham";
console.log(friends);
// friends = ["Vishwaraj", "Shashank"];

const fristName = "Jitesh";
const jitesh = [fristName, "Shaw", 2022 - 1993, "programmer", friends];
console.log(jitesh);
console.log(jitesh.length);

// Exercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1965, 1970, 2008, 1993, 1995];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ["Raktim", "Harsh", "Karni"];

// Add elements
const newLength = friends.push("Shubham");
console.log(friends);
console.log(newLength);

friends.unshift("Vishwaraj");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// Retrive index of elements
console.log(friends.indexOf("Harsh"));
console.log(friends.indexOf("Shashank"));


// Check existence of elements
friends.push(23);
console.log(friends.includes("Harsh"));
console.log(friends.includes("Shaashank"));
console.log(friends.includes(23));

if (friends.includes("Harsh")) {
    console.log("You have a friends called Harsh");
}

const jiteshArray = [
    "Jitesh",
    "Shaw",
    2022 - 1993,
    "programmer",

];

const jitesh = {
    firstName: "Jitesh",
    lastName: "Shaw",
    age: 2022 - 1993,
    job: "programmer",
    friends: ["Raktim", "Shubham", "Karni"]
};

const jitesh = {
    firstName: "Jitesh",
    lastName: "Shaw",
    age: 2022 - 1993,
    job: "programmer",
    friends: ["Raktim", "Shubham", "Karni"]
};
console.log(jitesh);

console.log(jitesh.lastName);
console.log(jitesh["lastName"]);

const nameKey = "Name";
console.log(jitesh["first" + nameKey]);
console.log(jitesh["last" + nameKey]);

// console.log(jitesh."last" + nameKey);

const interestedIn = prompt("What do you want to know about Jitesh? Choose between firstName, lastName, age, job, and friends");
console.log(jitesh[interestedIn]);

if (jitesh[interestedIn]) console.log(jitesh[interestedIn]);
else console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");

jitesh.location = "Bengaluru";
jitesh["instagram"] = "@shawjitesh";
console.log(jitesh);

// Challenge
// "Jitesh has 3 friends, and his best friend is called Raktim"

console.log(`${jitesh.firstName} has ${jitesh.friends.length} friends, and his best friend is called ${jitesh.friends[0]}`);

const jitesh = {
    firstName: "Jitesh",
    lastName: "Shaw",
    birthYear: 1993,
    job: "programmer",
    friends: ["Raktim", "Shubham", "Karni"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${this.hasDriversLicense ? "has" : "doesn't has"} a driver's license.`;
    }
};

console.log(jitesh.calcAge());

console.log(jitesh.age);
console.log(jitesh.age);
console.log(jitesh.age);

// Challenge
// "Jitesh is a 29-year old programmer, and he has a driver's license."

console.log(jitesh.getSummary());

// console.log("Lifting weights repeatition 1 🏋️");
// console.log("Lifting weights repeatition 2 🏋️");
// console.log("Lifting weights repeatition 3 🏋️");
// console.log("Lifting weights repeatition 4 🏋️");
// console.log("Lifting weights repeatition 5 🏋️");
// console.log("Lifting weights repeatition 6 🏋️");
// console.log("Lifting weights repeatition 7 🏋️");
// console.log("Lifting weights repeatition 8 🏋️");
// console.log("Lifting weights repeatition 9 🏋️");
// console.log("Lifting weights repeatition 10 🏋️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repeatition ${rep} 🏋️`);
}
*/