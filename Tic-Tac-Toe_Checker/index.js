/*
Tic-Tac-Toe Checker
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved,
wouldn't we? Our goal is to create a function that will check that for us!
Assume that the board comes in the form of a 3x3 array,
where the value is:
0 if a spot is empty,
1 if it is an "X",
or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

*/

function isValidInputValues(arr){
    const isArray = Array.isArray(arr);
    const isArrayLength = arr.length;
    const isArrayValuesValid =  arr
        .every(element => element
            .every(e => e === 0 || e === 1 || e === 2)
        );

    return isArray && isArrayLength && isArrayValuesValid;
}

function getWinner(arr) {
    if (arr.every( el => el === 2)) {
        return 2;
    }

    if (arr.every( el => el === 1)) {
        return 1;
    }

    return 0;
}

function getWinnerFromLines(lines) {
    return lines.reduce((acc, line) => {
        if (acc) {
            return acc;
        }
        return getWinner(line);
    }, 0)
}

function gameChecker(inputArrValue) {
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let deg1 = [];
    let deg2 = [];

    const lengthInputArrValues = inputArrValue.length;
    let lineWinner;

    if (isValidInputValues(inputArrValue)) {
        for (let i = 0; i < lengthInputArrValues; i++ ) {
            const isEmptySpots = inputArrValue[i].some( el => el === 0);

            if (isEmptySpots) {
                return -1;
            }

            if (!lineWinner) {
                lineWinner = getWinner(inputArrValue[i]);
            }

            col1.push(inputArrValue[i][0]);
            col2.push(inputArrValue[i][1]);
            col3.push(inputArrValue[i][2]);

            for (let j = 0; j < inputArrValue[i].length; j++ ) {
                if (i === j) {
                    deg1.push(inputArrValue[i][j]);
                }
                if (i === inputArrValue[i].length - 1 - j ) {
                    deg2.push(inputArrValue[i][j]);
                }
            }
        }

        const winner = lineWinner || getWinnerFromLines([col1 , col2 , col3 , deg1 , deg2]);

        return winner;
    }

    return 'input values are invalid';
}
gameChecker([[0,1,1], [0,1,2], [2,1,2]]);










