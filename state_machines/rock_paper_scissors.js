const readline = require("readline")

const rl = readline.createInterface(process.stdin, process.stdout)


function ask (questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText+"\n", resolve )
    })
}


const game = {
    matchups: {
        rock: {
            beats: "scissors",
            losesTo: "paper"
        },
        paper: {
            beats: "rock",
            losesTo: "scissors"
        },
        scissors: {
            beats: "paper",
            losesTo: "rock"
        }
    },
    playerScore: 0,
    computerScore: 0,
    getMove(){
        const moves = ["rock", "paper", "scissors"]
        const index = Math.floor(Math.random() * 3)

        return moves[index]
    },
    async run() {
        console.log("Let's play a game of Rock paper scissors");
        console.log("Whoever wins 3 matches wins the game. Let's start!");

        while(true){
            console.log(`You: ${this.playerScore} | Computer: ${this.computerScore}`)
            let playerAnswer = await ask("Rock, Paper, Scissors -Shoot!")
            playerAnswer=playerAnswer.toLowerCase()

            if(this.matchups[playerAnswer] === undefined){
                console.log("Please choose rock paper or scissors");
                continue
            }

            let computerAnswer = this.getMove()

            console.log(`Computer chooses ${computerAnswer}`);

            if(this.matchups[playerAnswer].beats === computerAnswer) {
                console.log(`Your ${playerAnswer} beats the computer's ${computerAnswer}, you win this round`);
                this.playerScore += 1
            } else if (this.matchups[playerAnswer].losesTo === computerAnswer) {
                console.log(`Computer ${computerAnswer} beats the player's ${playerAnswer}, computer wins this round`);
                this.computerScore +=1
            } else {
                console.log(`You and the computer both chose ${playerAnswer}, it's a tie`);
            }

            if(this.playerScore === 3){
                console.log(`You: ${this.playerScore} | Computer: ${this.computerScore}`)
                console.log("Congrats, you won!");
                break;
            }

            if(this.computerScore === 3){
                console.log(`You: ${this.playerScore} | Computer: ${this.computerScore}`)
                console.log("Computer wins the game");
                break;
            }
        }

        process.exit()
    }   

}


game.run()



// How to check valid commands that a user can input, vs creating extensive if statement conditionals
let validCommands = ["i", "inv", "inventory", "items"]

async function testValidCommand () {

    let playerResponse = await ask("Please select an option")

    console.log(playerResponse);

    if(validCommands.includes(playerResponse)){
        console.log("Inventory Here");
    } else {
        console.log("command not recognized");
    }
}

// testValidCommand()
