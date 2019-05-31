/*
Example Game
The board
Boats are placed either horizontally, vertically or diagonally on the board. 0 represents a space not occupied by a boat.
 Digits 1-3 represent boats which vary in length 1-4 spaces long.
There will always be at least 1 boat up to a maximum of 3 in any one game.
 Boat sizes and board dimensions will vary from game to game.
Attacks
Attacks are calculated from the bottom left, first the X coordinate then the Y.
There will be at least one attack per game, and the array will not contain duplicates.

[[2, 1], [1, 3], [4, 2]];
First attack    `[2, 1]` = `3`

Second attack `[1, 3]` = `0`
Third attack   `[4, 2]` = `1`
*/
function isValidInputValues(arrBoard){
    const EMPTY_CELL = 0;
    const MAX_NUMBER_BOAT = 4;

    const isArray = Array.isArray(arrBoard);
    const isArrayLength = arrBoard.length;
    const isArrayValuesValid =  arrBoard
        .every(element => element
            .every(e => {
                return (e <= MAX_NUMBER_BOAT) && (e >= EMPTY_CELL) && Number.isFinite(e);
            })
        );

    return isArray && isArrayLength && isArrayValuesValid;
}



function convertAttacksCoordinates (boardLength, attack){
    const x = attack[0] - 1;
    const y = boardLength - attack[1];
    return [y, x];
}



function getCompleteScore(arr) {
    const POINTS_FOR_DAMAGE = 0.5;
    const POINTS_FOR_SUNK = 1;
    const POINTS_FOR_NOT_TOUCHED = -1;

    return arr.reduce((acc, currentValue) => {
        if (currentValue.damaged === currentValue.length) {
            acc.totalSunk += POINTS_FOR_SUNK;
        } else if (currentValue.damaged === 0) {
            acc.totalNotTouched += 1;
            acc.totalPoints += POINTS_FOR_NOT_TOUCHED;
        } else if (currentValue.damaged < currentValue.length && (currentValue.damaged !== 0) ) {
            acc.totalPoints += POINTS_FOR_DAMAGE * currentValue.damaged;
        }
        acc.totalDamage += currentValue.damaged;
        return acc;
    }, {totalSunk: 0, totalDamage: 0, totalNotTouched: 0, totalPoints: 0});
}



function damagedOrSunk(board) {
    let ships = [];
    let totalScore = {status: 'input values are invalid'};

    if (isValidInputValues(board, attacks)) {
        const boardLength = board.length;
        const attacksLength = attacks.length;

        for (let i = 0; i < attacksLength; i++) {
            const attack = [attacks[i][0], attacks[i][1]];

            const convertedAttack = convertAttacksCoordinates(boardLength, attack);
            const attacked = board[convertedAttack[0]][convertedAttack[1]];

            if (attacked !== 0) {
                const ship = ships.find(s => s.name === attacked);
                if (ship) {
                    ship.damaged += 1;
                    ship.points += 0.5;
                } else {
                    ships.push({name: attacked, damaged: 1, length: 0, points: 0.5});
                }
            }
        }

        for (let x = 0; x < boardLength; x++) {
            for (let y = 0; y < board[x].length; y++) {
                const cell = board[x][y];

                if (cell !== 0) {
                    const ship = ships.find(s => s.name === cell);
                    if (ship) {
                        ship.length += 1;
                    } else {
                        ships.push({name: cell, damaged: 0, length: 1, points: 0});
                    }
                }
            }
        }

        totalScore = getCompleteScore(ships);
        return totalScore;
    }
    return totalScore;
}


board = [
    [0,0,2,2,2,2],
    [0,3,0,0,0,0],
    [0,3,0,1,0,0],
    [0,3,0,1,0,0]
];
attacks = [[2, 1], [1, 3], [4, 2]];

damagedOrSunk(board, attacks);


















