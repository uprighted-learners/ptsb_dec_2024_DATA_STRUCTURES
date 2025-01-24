/* 

    ? Objects
        - Denoted by {}
        - Built with Key : Value pairs
        - Object Literal - When values are hard coded within the object

        Structure:

        let obj = {
            key: "value"
        }

    * Objects are dictionaries
*/


let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Man",
    age: 25,
    active: true
}


let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
        "season one" : [
            {
                episode_title: "Simpsons Roasting on an open fire",
                aired: "1989-12-17"
            },
            {
                episode_title: "Bart the genius",
                aired: "1990-01-01"
            }
        ],
        "season two": [
            // .../
        ],
        "season three": [
            // .../
        ],
    },
    currently_running : true
}

// console.log(theSimpsons.genre); // Dot notation
// console.log(theSimpsons["genre"]); // Square bracket notation, MUST wrap key name in quotes

// console.log(theSimpsons.seasons["season one"]);
console.log(theSimpsons.seasons["season one"][1].episode_title);
// console.log(theSimpsons["seasons"]);


theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"]


theSimpsons.characters.push("Ned")

theSimpsons.currently_running = false

/*
- Navigate to season one, episode one, and change the date to reflect a date of 1990-12-17. 
*/

theSimpsons.seasons["season one"][0].aired = "1990-12-17"

console.log(theSimpsons.seasons);

// Reference

let nuclearLaunchSystem = {
    isArmed: false
}

let sprinklerSystem = {...nuclearLaunchSystem}

sprinklerSystem.isArmed = true;

console.log({sprinklerSystem});
console.log({nuclearLaunchSystem});