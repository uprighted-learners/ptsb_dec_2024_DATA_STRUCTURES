let stateMachine = {
    state: "liquid",
    emoji: "💧",
    transitions: {
        liquid: {
            vaporize() {
                this.state = "gas",
                this.emoji = "☁️"
            },
            freeze () {
                this.state = "solid",
                this.emoji = "🪨"
            }
        },
        solid : {
            melt () {
                this.state = "liquid",
                this.emoji = "💧"
            }
        },
        gas : {
            condense() {
                this.state = "liquid",
                this.emoji = "💧"
            }
        }
    },
    dispatcher (actionName) {
        let action = this.transitions[this.state][actionName]

        if (action) {
            let previous = this.state

            console.log(`${actionName} on ${this.state}`);

            action.call(this) // Calls the nested function/method

            console.log(`Changed ${previous} to ${this.state} ${this.emoji}`);
        } else {
            console.log("Invalid action or method name on the given state");
            console.log(`You cannot ${actionName} a ${this.state}`);
        }

    }
}

console.log(stateMachine.state, stateMachine.emoji); // Liquid 

stateMachine.dispatcher("melt") // !Invalid
stateMachine.dispatcher("freeze") // Works out Changed liquid to solid 🪨

stateMachine.dispatcher("condense") //! Invalid
stateMachine.dispatcher("melt") 



