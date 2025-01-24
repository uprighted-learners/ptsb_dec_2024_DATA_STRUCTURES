let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
      "season one": [
        {
          episode_title: "Simpsons Roasting on an open fire",
          aired: "1989-12-17",
        },
        {
          episode_title: "Bart the genius",
          aired: "1990-01-01",
        },
      ],
      "season two": [
        // .../
      ],
      "season three": [
        // .../
      ],
    },
    currently_running: true,
    characters: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
};

// let characters = theSimpsons.characters
// let seasons = theSimpsons.seasons

let {characters, seasons} = theSimpsons

console.log(characters);
console.log(seasons);

characters.push("Moe")

console.log(theSimpsons)

let { currently_running: on_air } = theSimpsons // Can change the variable name from the key you are pulling out of the object

console.log(on_air);

//? Spreading with objects
const simpsonsCharacters = {
    simpsonHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    moesTavern: ["Moe", "Barney"]
}

const generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3 eyed fish"
}

const locations = {
    ...simpsonsCharacters,
    dmv: ["Patty", "Selma"],
    ...generalLocations
}

// console.log(locations);

theSimpsons = {
    ...theSimpsons,
    locations
}

console.log(theSimpsons);


let x = 5

let testObj = { x } // Shorthand to create a k:v pair. x will be name of the key, and whatever the x variable represents will be the value

console.log(testObj) // Output: { x: 5 }