import readline from "node:readline"
import { stdin as input, stdout as output } from 'node:process'



function guess() {
	const welcomeMsg = `Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\nPlease select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)`

	console.log(welcomeMsg)
	const answer = Math.floor(Math.random() * 100)

	const rl = readline.createInterface({
		input,
		output
	});

	let trying = 1
	console.log(answer)
	rl.question(`Enter your choice: ` , number => {
		if ( parseInt(number) == 1 ) {
			function askQuestion() {
				console.log(`\nGreat! You have selected the Easy difficulty level.
Let's start the game!\n`);
				rl.question(`Enter your guess: `, number => {
					if ( number == answer ) {
						console.log(`Correct\n`)
						return rl.close()
					}

					if ( trying == 10 ) {
						console.log('Youre run of guess change')
						return rl.close()
					}
					console.log(`incorrect\n`)
					trying++;
					return askQuestion()
				})

			}
			askQuestion()
		} else if ( parseInt(number) == 2 ) {
			function askQuestion() {
				console.log(`\nGreat! You have selected the Medium difficulty level.
Let's start the game!\n`);
				rl.question(`Enter your guess: `, number => {
					if ( number == answer ) {
						console.log(`Correct\n`)
						return rl.close()
					}

					if ( trying == 5 ) {
						console.log('Youre run of guess change')
						return rl.close()
					}
					console.log(`incorrect\n`)
					trying++;
					return askQuestion()
				})

			}
			askQuestion()
		} else if ( parseInt(number) == 3 ) {
			function askQuestion() {
				console.log(`\nGreat! You have selected the Hard difficulty level.
Let's start the game!\n`);
				rl.question(`Enter your guess: `, number => {
					if ( number == answer ) {
						console.log(`Correct\n`)
						return rl.close()
					}

					if ( trying == 3 ) {
						console.log('Youre run of guess change')
						return rl.close()
					}
					console.log(`incorrect\n`)
					trying++;
					return askQuestion()
				})

			}
			askQuestion()
		}
	})


}

export default guess;