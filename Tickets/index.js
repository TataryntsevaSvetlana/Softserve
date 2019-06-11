/*	
Есть 2 способа подсчёта счастливых билетов:
1. Простой — если на билете напечатано шестизначное число, и сумма первых трёх цифр равна сумме последних трёх, то этот билет считается счастливым.
2. Сложный — если сумма чётных цифр билета равна сумме нечётных цифр билета, то билет считается счастливым.
Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале. 

Входные параметры: объект context с полями min и max
Выход: объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта.


*/

function isValidInput(obj) {
    const isObject = obj && obj.constructor === Object;
    const { min, max } = obj;
    const validValues = isFinite(min) && isFinite(max) && min < max && min > 0;

    return isObject && validValues;
}

function sumValue(arr) {
    return arr.reduce((acc, curr) => acc + Number(curr), 0);
}

function simpleCounting(arr) {
    let sum1 = [];
    let sum2 = [];

    arr.forEach((el, i) => {
        (i < arr.length / 2) ? sum1.push(el) : sum2.push(el);
    });

    return (sumValue(sum1) === sumValue(sum2)) ? 1 : 0;
}

function complicatedCounting(arr) {
    let evenNumbersSum = [];
    let oddNumbersSum = [];

    arr.forEach(el => {
        (el % 2 === 0) ? evenNumbersSum.push(el) : oddNumbersSum.push(el);
    });

    return (sumValue(evenNumbersSum) === sumValue(oddNumbersSum)) ? 1 : 0;
}


function getWinner(context) {
    if (isValidInput(context)) {
        const NUMBER_LENGTH_TICKET = 6;
        let simpleCounter = 0;
        let complicatedCounter = 0;

        for (let i = context.min; i <= context.max; i++) {
            let ticket = String(i);
            if (ticket.length < NUMBER_LENGTH_TICKET) {
                ticket = ticket.padStart(NUMBER_LENGTH_TICKET, "0");
            }

            let ticketNumbers = ticket.split('');
            simpleCounter += simpleCounting(ticketNumbers);
            complicatedCounter += complicatedCounting(ticketNumbers);
        }

        const winner = (simpleCounter > complicatedCounter) ? 'simple method' : 'simple method';

        return {
            winner,
            simple: simpleCounter,
            complicated: complicatedCounter
        };
    }

    return { status: 'failed', reason: 'wrong input values' };
}

const context = {
    min:  1,
    max: 111111
};

console.log(getWinner(context));








