## Calculate-Bowling-Game-Score

App that calculates the score of a Bowling Game and tests the functionality of the method of its calculation.

## App's functionality:

Given an array of values representing the ten frames of a bowling game and the points socored per each roll, based on the bowling game's score calculation rules, the app can calculate the total score per frame and the final score of the game.

It comes with `Jest` it's a framework that will allow to test if the app functionality is working, no matter what the input of it will be.

## The scoring rules:

If you score a frame in one of three ways. First, if it is not a strike or a spare you simply add the two rolls together giving you the score for the frame. Second, if it is a spare then you add up the two rolls for the frame plus the next roll giving you the score for the frame. Third, if it is a strike then you add up the two rolls for the frame plus the next two rolls giving you the score for the frame. The score for the game is simply the sum of each frame’s calculated score.

## APP bones:

```
  |index.html
  |script
      |main.js
  |test
      |main-calculateScore.test.js
```

## App instalation steps:

In order to download and run the app on your PC, please take the following steps:

1. In the terminal of your PC introduce `https://github.com/ioanadamo/Calculate-Bowling-Game-Score.git`
2. Move to the folder of the repository
3. Still in the terminal introduce `npm init` and click enter until it's asking _Is this OK?_ and please type _yes_ and click enter.
4. Introduce in the terminal `npm install --save-dev jest`
5. In order to test the functionality of the app you can introduce in the terminal `npm test` and you will get a reply in the terminal if the app's functionality passed the test or not.

## Testing functionalities of the app:

In the folder test - file - main-calculateScore.test.js you will find the test suite.

- The test is taking as a parameter an `array` called `scoreBowlingGame`:
- The input of the array in this wile is :

`const scoreBowlingGame = [
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
]`

And the output has to be :

`{ 'Frame Scores': '3,19,9,20,21,15,5,8,20,20', 'Game Score': 140 })`

##I DARE YOU TO TEST MY APP!!!##

You can simply replace the values of `scoreBowlingGame` with an `array` with the same length - `10`, and all the inputs have to be `valid`.

Introduce `npm test` in the console and you will receive a feed-back in the console if the app passed the test.

## THank you for accepting the challenge to test my app

You're wellcome,

Ioana Daniela Moldovan
``````
