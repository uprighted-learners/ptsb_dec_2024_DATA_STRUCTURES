/* 
    ? Array Destructuring
        - Syntax is on the left side of the assignment operator (=) 
        - Great for pulling info out of an array, and assigning data to it's own variable
*/

const fullName = ["Jane", "Doe"];

const [first, last] = fullName;

console.log(first);
console.log(last);

//? Spread Operator
/*
    - Denoted by 3 consecutive periods ...
    - Pulls out all of the elements of an array and give them to you as a standalone list of elements

    const fullName = ["Rocket", "Raccoon"]

    ...fullName // "Rocket", "Raccoon"

    const elements = ...fullName
*/

const marvelHero = ["Captain", "America"];

console.log(...marvelHero);

const copiedFullName = [...fullName];

copiedFullName.push("Smith");

console.log({ fullName });
console.log({ copiedFullName });

const prices = [10.99, 5.99, 3.99, 6.59];

console.log(Math.min(...prices)); // 10.99, 5.99, 3.99, 6.59

/* 
    ? Rest
        - Will grab the remaining items
*/

const testArray = [
  "Jane",
  "Doe",
  "Mrs.",
  { month: 3, date: 22, year: 1973 },
  "testOne",
  2,
  "test3",
  4,
  true,
  false,
];

const [fName, lName, , birthdate, , , ...rest] = testArray;

console.log({ fName });
console.log({ lName });
console.log({ birthdate });

console.log({ rest });

const [, , , dob] = testArray;

console.log({ dob });

let arr1 = ["Amit", "Bob"];

let arr2 = ["Mangat", "Smith"];

let myNameArray = [...arr1, ...arr2];

console.log({ myNameArray });

let myPublicInfo = ["Amit", 34];

let socialSecurity = "555-55-5555";

let myPrivateInfo = [...myPublicInfo]

console.log({myPublicInfo});
console.log({myPrivateInfo});


