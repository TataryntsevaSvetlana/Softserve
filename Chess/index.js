
/*1.	Шахматная доска
Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
  *  *  *  *  *  *
*  *  *  *  *  *
  *  *  *  *  *  *
*  *  *  *  *  *

Входные параметры: длина, ширина, символ для отображения.
Выход: строка с представлением шахматной доски
*/

function showChessBoard(cols = 5, rows = 7, char = '*') {
    let board = '\n';

    for (let currentRow = 0; currentRow < rows; currentRow++) {

        if (currentRow % 2 === 0) {
            board += ' ';
        }

        for (let currentCol = 0; currentCol < cols; currentCol++) {
            board += ` ${char} `;
        }
        board += '\n';
    }
    return board;
}

showChessBoard();











