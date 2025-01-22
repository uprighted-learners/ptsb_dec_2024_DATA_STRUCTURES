/* 
    ? Arrays
        - Denoted with [] brackets
        - Index starts at 0
        - Specific methods are avail for them

*/
//             0       1         2          3
let list = ["milk", "bread", "chicken", "coffee"];


console.log(list[2]); // output: chicken

// Checking length

console.log(list.length)

// Getting last element of array
console.log(list[list.length - 1]) // output: coffee

let avengers = ["Nick", 2, false, "Steve", "Bruce", ["Tony", 8, true]]

console.log(typeof avengers) // Wont work
console.log(avengers instanceof Array); // true if array

/* 
    Using a console log
    - Target Bruce 
    - Target the true
    - Using string interpolation, log "Hello, Nick" and another "Hello, Tony"
*/

console.log(avengers[4]) // Bruce

console.log(avengers[5][2]); // true

console.log(`Hello, ${avengers[0]}` , `Hello, ${avengers[5][0]}`); // Hello, Nick Hello, Tony

/* 
    ? Reference
        - Important to note, when an array is created it is being stored in memory
        - Assigning a new variable to the initial array will reference the same array in memory
        - It can be important when working with immutable data (data that shouldn't change), that we not alter things in which or where they originate
*/

let myPublicInfo = [ "Amit", 34 ];

let myPrivateInfo = myPublicInfo

myPrivateInfo.push("555-55-5555")

console.log(myPrivateInfo)

console.log(myPublicInfo);
