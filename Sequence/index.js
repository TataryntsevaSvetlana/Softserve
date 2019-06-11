/*	
Вывести через запятую ряд длиной n,
состоящий из натуральных чисел, квадрат которых не меньше заданного m.

Входные параметры: длина и значение минимального квадрата
Выход: строка с рядом чисел
*/
function isValidValues(number1, number2){
    return Number(number1) > 0 && Number(number2) > 0;
}

function getNumericSequence(n, m) {

    if (isValidValues(n, m)) {
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

        return result;
    } else {
        return { status: 'failed', reason: 'wrong input values' };
    }
}

console.log(getNumericSequence(0b11 , 12));










