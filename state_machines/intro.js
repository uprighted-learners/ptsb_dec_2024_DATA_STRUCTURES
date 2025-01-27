let dog = {
    name: "Spot",
    color: "Brown/Black",
    speak:  function () {
        console.log(`The ${this.color} dog, named ${this.name} goes Bark!`);
    } 
}


dog.speak()

let rectangle = {
    height: 10,
    width: 8,
    // Create a method called area
    area: function () {
        return this.height * this.width
    }
}

// console.log(rectangle.height) // 10
// console.log(rectangle.area()) // 80

let fruitTranslator = {
    apple: "manzana",
    banana: "platano",
    cherry: "cereza",
}

console.log(fruitTranslator.apple);

let someKey = "cherry"

console.log(fruitTranslator.someKey); //! Undefined. cant use dynamic variables using dot notation
// Using [] notation, allows us to provide a dynamic variable to be passed as a key, in order to get the value
// console.log(fruitTranslator[someKey]);


function getPoemTitle (authorUserSelected) {
    let poemTitleByAuthor = {
        "Robert Frost" : "Stopping by Woods on a snowy evening",
        "Shel Silverstein": "Falling Up",
        "Sylvia Plath": "The Bell Jar"
    }
    
    return poemTitleByAuthor[authorUserSelected]

}


console.log(getPoemTitle("Robert Frost"))
console.log(getPoemTitle("Shel Silverstein"))