/* 
    ? Iterative Methods
        - Do not destroy the initial array
        - Take in a callback function
        - Loop through arrays for us
        - Must have a return, except forEach
*/

let fruits = ["apple", "pear", "mango", "orange", "pineapple"];

let filteredFruits = fruits.filter(function (fruit) {
  if (fruit === "mango" || fruit === "pineapple") {
    return true;
  } else {
    return false;
  }
});

let filteredFruitsConcise = fruits.filter(
  (fruit) => fruit === "mango" || fruit === "pineapple"
);

console.log(fruits); // Unmodified
console.log(filteredFruitsConcise); // New Array containing filtered items

// Using function reference as a callback provided to the .filter
function removeMango(fruit) {
  let result = fruit !== "mango";
  return result;
}

let filteredFruit = fruits.filter(removeMango);

console.log(filteredFruit);

// console.log(fruits.filter((fruit) => !fruit.includes("apple"))) // New array with items that don't contain the substring "apple"

/* 
*       Challenge
        - How do you remove the 5s from an array
        - Store the result in new variable and console.log that variable
*/
let myNumberArray = [3, 5, 7, 5, 5, 5, 2, 7, 12, 5];

let removedFives = myNumberArray.filter(function (num) {
  if (num !== 5) {
    return true;
  }
});

console.log(removedFives);
console.log(myNumberArray.filter((num) => num !== 5));

let movies = [
  { name: "Top Gun 2", category: "Action" },
  { name: "Scary Movie 5", category: "Comedy/Horror" },
];

movies.push({ name: "It", category: "Horror" });
movies.push({ name: "Get Out", category: "Horror" });
movies.push({ name: "Transformers", category: "Action" });

let actionMovies = movies.filter(movie => movie.category === "Action");
// console.log(actionMovies);
let horrorMovies = movies.filter(movie => movie.category.includes("Horror")) // Using includes it will check for this substring

console.log(horrorMovies);

