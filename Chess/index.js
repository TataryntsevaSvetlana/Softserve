
/*1.	Шахматная доска
Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
  *  *  *  *  *  *
*  *  *  *  *  *
  *  *  *  *  *  *
*  *  *  *  *  *

Входные параметры: длина, ширина, символ для отображения.
Выход: строка с представлением шахматной доски
*/
function isValidNumber(num) {
    return Number.isInteger(num) && num > 0;
}

function isValidValues(width, height, symbol) {
    const isWidthValid = isValidNumber(Number(width));
    const isHeightValid = isValidNumber(Number(height));
    const isValidSymbol = String(symbol).length === 1;

    return isWidthValid && isHeightValid && isValidSymbol;
}

function showChessBoard(width = 5, height = 7, char = '*') {

    if (isValidValues(width, height, char)) {
        let board = '\n';

        for (let currentRow = 0; currentRow < height; currentRow++) {

            if (currentRow % 2 === 0) {
                board += ' ';
            }

            for (let currentCol = 0; currentCol < width; currentCol++) {
                if (currentCol % 2 === 0) {
                    board += ' ';
                } else {
                    board += char;
                }
            }
            board += '\n';
        }
        return board;
    } else {
        return { status: 'failed', reason: 'wrong input values' };
    }
}

console.log(showChessBoard('5', 4, '*'));











