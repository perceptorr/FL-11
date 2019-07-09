let play = confirm('Do you want to play a game?');
if (play) {
	let rangeStart = 8;
	let range = rangeStart;
	let difficulty = 4;
	let game = true;
	let prize = [];
	let atemptsMax = 3;
	let atemptsFl = 0;
	let totalPrize = 0;
	let prizeType = 3;
	let prizeStart = 100;
	let winCoef = 1;
	let tries = winCoef;
	let divide = 2;
	let round;
	while (game) {
		prize[prizeType] = prizeStart * tries;
		for (let i = atemptsMax; i > atemptsFl; i--) {
			prize[i - 1] = prize[i] / divide;
		}
		let number = Math.floor(Math.random() * (range + 1));
		for (let i = atemptsMax; i > atemptsFl; i--) {

			let atemptsLeft = i;
			let playerGuess = prompt('Guess the number from 0 to ' + range +
				'\nAttempts left: ' + atemptsLeft +
				'\nTotal prize: ' + totalPrize + '$' +
				'\nPossible prize: ' + prize[i] + '$');


			if (playerGuess === number) {
				totalPrize += prize[i];
				round = true;
				if (confirm('Congratulation, you won! Your prize is: ' + prize[i] + '$ Do you want to continue?')) {
					tries += tries;
					range += difficulty;
				} else {
					round = false;
				}
				break;
			} else {
				round = false;
			}
		}
		if (!round) {
			alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
			if (confirm('Do you want to play again?')) {
				tries = winCoef;
				range = rangeStart;
				totalPrize -= totalPrize;
			} else {
				break;
			}
		}
	}
} else {
	alert('You did not become a billionaire, but can.');
}