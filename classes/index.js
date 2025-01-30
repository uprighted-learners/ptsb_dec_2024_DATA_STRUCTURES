class Pizza {
    constructor (size, toppings) {
        // Property that will be in the obj
        this.size = size
        this.toppings = toppings
    }

    describe () {
        return `This is a ${this.size} pizza with ${this.toppings.join(" ")}`
    }
}


let pizza1 = new Pizza("large", ["pepperoni", "mushrooms"])
let pizza2 = new Pizza("medium", ["sausage", "peppers"])
// console.log({pizza1});
// console.log({pizza2});

// console.log(pizza1.describe());
// console.log(pizza2.describe());


class Car {
    constructor (make, model, year ) {
        this.make = make
        this.model = model
        this.year = year
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving!`);
    }

    // Factory Method - A method/function that will generate/return a class for you
    static createCar (make, model, year,) {
        // some logic here
        return new Car(make, model, year)
    } 
}

// let car1 = Car().drive() // ! Will not work! Drive is not a static method, have to use 'new' keyword
// let car2 = new Car("Tesla", "Model-X", 2022).drive() // Works, bc we instantiated the class with 'new' and drive is NOT static

let myCar = Car.createCar("Tesla", "Model-X", 2022); // Works, b/c createCar is a static method, static properties/methods do not need to be instantiated

// myCar.drive()


class Animal {
    constructor(name) {
        this.name = name // Constructor initializes the 'name' property
    }
    speak() {
        return `${this.name} makes a noise`
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name) // Call the parent constructor, or inherit these properties from parent
   
        this.breed = breed
    }

    speak() {
        return `${this.name} barks!`
    }
}

let myDog = new Dog("Tulip", "Terrier")

// console.log(myDog.speak())
// console.log(myDog.breed)

// console.log(`${myDog.name} goes bark!`);//! Avoid doing when using classes, better to box up or internalize logic and call out to methods within the class itself

const fido = {
    name: "Fido",
    color: "brown",
    describe() {
        return `Hello! My name is ${this.name} and I am ${this.color}`
    }
}

// Recommended
// console.log(fido.describe());

//! Discouraged
// console.log(`Hello! My name is ${this.name} and I am ${this.color}`);


class Rectangle {
    constructor (height, width) {
        this.height = height
        this.width = width
    }

    area () {
        return this.height * this.width
    }
}

let shape = new Rectangle(5,7)
console.log(`The shape's area is: ${shape.area()}`);

class Entity {
    constructor(name, health){
        this.name = name
        this.health = health
    }
}

class Player extends Entity {
    constructor(name, health, isPlayer){
        super(name, health)

        this.isPlayer = isPlayer
    }
}

class Enemy extends Entity {
    constructor(name, health, isPlayer){
        super(name, health)
        this.isPlayer = isPlayer
    }
}

let player = new Player("Link", 3, true)
let player1 = new Player("Mario", 3, true)

console.log({player});
console.log({player1});

let enemy1 = new Enemy("Skeleton", 1, false)
let enemy2 = new Enemy("Slime", 2, false)

console.log({enemy1});
console.log({enemy2});