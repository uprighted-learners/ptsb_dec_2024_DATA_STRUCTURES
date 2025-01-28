let states = {
    green: ["yellow"],
    yellow: ["red"],
    red: ["green", "yield"],
    yield: ["red"]
}

let currentState = "green"

function enterState (newState) {
    // We access the states object using the currentState variable as a key
    let validTransitions = states[currentState]

    // Check if the validTransitions array includes newState parameter
    if (validTransitions.includes(newState)) {
        currentState = newState
        console.log("The light is now: ", currentState);
    } else {
        console.log("Invalid state transition attempted - from " + currentState + " to " + newState);
    }
}


enterState("yellow") // Current state = "yellow"
enterState("green") // ! Invalid transition
enterState("red")
enterState("yellow")