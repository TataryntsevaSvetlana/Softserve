/*	
Вывести через запятую ряд длиной n,
состоящий из натуральных чисел, квадрат которых не меньше заданного m.

Входные параметры: длина и значение минимального квадрата
Выход: строка с рядом чисел
*/


function getNumericSequence(n, m) {
    let number = Math.sqrt(m);
    let firstValue = Math.ceil(number);
    let result;

    let arr = [];
    let i = 0;

    while (i < n) {
        arr.push(firstValue + i);
        i++;
    }
    result = arr.join(', ');
    console.log(result);
    return result;
}

getNumericSequence(8, 512);










