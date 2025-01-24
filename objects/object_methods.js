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
};

//* Object.keys() - returns back an array of keys

Object.keys(theSimpsons).forEach((key) => {
    console.log(theSimpsons[key]);    
});


//* Object.values() - returns back an array of values

console.log(Object.values(theSimpsons));

//* Object.assign() - copies all enumerable properties from one or more sources

let objOne = { name: "Bob", age: 50 };
let objTwo = { work: "Manager" };

let newObj = Object.assign({},objOne, objTwo) 

console.log({newObj}); // Brand new object
console.log({objOne}) // Remains unaffected

delete theSimpsons.currently_running

// console.log(theSimpsons);

//* Object.freeze()

Object.freeze(theSimpsons)
theSimpsons.id = 2

console.log(theSimpsons.id);