const ScoreCalculator = require('../script/main');
test('scoreCalulator', () => {
	const bowlingGame = new ScoreCalculator(scoreBowlingGame);

	expect(bowlingGame.calculateTotalScore(scoreBowlingGame)).toStrictEqual({
		'Frame Scores': '3,19,9,20,21,15,5,8,20,20',
		'Game Score': 140
	});
});
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
