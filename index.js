'use strict';

function calculateTotalScore() {
	const score = this.input;
	let frameScore = [];
	let gameScore = null;
	let scorePerFrame = null;

	for (let i = 0; i < score.length; i++) {
		let frame = score[i];
		let secondFrame = score[i + 1];
		let thirdFrame = score[i + 2];

		scorePerFrame = frame.reduce((firstRoll, secondRoll) => {
			if (
				firstRoll === 10 &&
				secondFrame &&
				thirdFrame &&
				secondFrame[0] === 10 &&
				secondFrame[1] === null
			) {
				return firstRoll + secondFrame[0] + thirdFrame[0];
			} else if (firstRoll === 10 && secondFrame) {
				return firstRoll + secondFrame[0] + secondFrame[1];
			} else if (firstRoll + secondRoll === 10 && secondRoll !== null) {
				return firstRoll + secondRoll + secondFrame[0];
			} else if (secondRoll === 10) {
				return secondRoll + secondFrame[1];
			} else if (frame.length === 2) {
				return frame.reduce((firstRoll, secondRoll) => firstRoll + secondRoll);
			} else {
				return firstRoll + secondRoll;
			}
		});
		frameScore.push(scorePerFrame);
	}

	gameScore = frameScore.reduce(
		(frameScore1, frameScore2) => frameScore1 + frameScore2
	);

	return { 'Frame Scores': frameScore.toString(), 'Game Score': gameScore };
}

let scoreBowlingGame = [
	[1, 2],

	[10, null],

	[5, 4],

	[7, 3],

	[10, null],

	[10, null],

	[1, 4],

	[6, 2],

	[7, 3],

	[10, 3, 7]
];

console.log(calculateTotalScore(scoreBowlingGame));
