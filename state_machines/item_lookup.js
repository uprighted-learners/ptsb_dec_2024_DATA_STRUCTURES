const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText+"\n", (userInput) => {

        if(userInput.length === 0){
            reject("Please type something...")
        }else {
            resolve(userInput)
        }
    });
  });
}

let inventory = {
    sword : {
        name: "Excalibur",
        description: "A sword pulled from stone",
        look(){
            // Show other item info....
            console.log(`${this.name} ⚔️`);
            return this.description
        }
    },
    axe : {
        name: "Mighty Battle Axe Debugging",
        description: "The destroyer of bugs! 🪲(programming ones only, we're not inhumane here!)",
        look(){
            // Show other item info....
            console.log(`${this.name} 🪓`);
            return this.description
        },
        swing(){
            // Some other FUNCTIONality -> player attacks a target. (Would prob pass in an arg for target)
            return `You swing the ${this.name}`
        }
    },
    hp_potion : {
        name: "HP Potion",
        description: "Potion to restore health",
        drink() {
            // Some other FUNCTIONality -> player += hp
            return `You drink the ${this.name} 😊🍹`
        },
        drop() {
            delete inventory.hp_potion
            return `Dropped ${this.name} 🍹`
        }
    }
}

let validInvCommands = ["i", "inventory", "items", "inv", "item"]

async function start () {
    try{
        while(true){
            let response = await ask("What do you want to do?")
            if(response === "exit") process.exit()
                
                let splitResponse = response.split(" ")
                //? First word from user input (Before the space)
                // let action = splitResponse[0]
                //? Second word from user input (After the space)
                // let target = splitResponse[1]
                
                //* OR
                
                let [action, target] = splitResponse
                
                if (action && target ){
                    //? 2 worded response/user input
                    interact(action, target)
                } else if (action) {
                    //? 1 word response/user input
                    interact(action, "")
                }
            }
    } catch(err){
        console.log(err);
        start()
    }
}

function interact (action, target) {
    if(validInvCommands.includes(action)){
        showInventory()
        return;
    }

    if(inventory[action]){
        showActions(action)
        return;
    }

    let validItem = inventory[target] // Check if item exists as a key on inv object

    let validAction = inventory[target]?.[action] // Optional chaining using ? and . - Performs a check to see if a key exists and then moves forward IF it exists

    // inventory.hp_potion?.look ? Example of optional chaining with dot notation

    // Validating Action

    if(validItem) {
        console.log("Item Found! 👍");

        if(validAction && typeof validAction === "function") {
            console.log("Action can be done! 👍");
            console.log(inventory[target][action]())
        } else {
            console.log(`Are you crazy?!?!? You can't ${action} a ${target}`);
        }
    } else {
        console.log("Item not found 😔");
    }
}

function showInventory () {
    console.log("-".repeat(15));
    console.log("Inventory");
    console.log("-".repeat(15));
    
    Object.keys(inventory).forEach((itemString) => {
        console.log(itemString + ":", inventory[itemString].name);
    })
    
    console.log("-".repeat(15));
}

function showActions (action) {
    console.log("-".repeat(15));
    console.log("Available Actions");
    console.log("-".repeat(15));

    Object.keys(inventory[action]).forEach((key) => {
        if(typeof inventory[action][key] === "function"){
            console.log(key)
        }
    })
    console.log("");
}


start()