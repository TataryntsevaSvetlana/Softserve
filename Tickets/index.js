/*	
Есть 2 способа подсчёта счастливых билетов:
1. Простой — если на билете напечатано шестизначное число, и сумма первых трёх цифр равна сумме последних трёх, то этот билет считается счастливым.
2. Сложный — если сумма чётных цифр билета равна сумме нечётных цифр билета, то билет считается счастливым.
Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале. 

Входные параметры: объект context с полями min и max
Выход: объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта.


*/
const context = {
    min: 000000,
    max: 999999
};

// const winner = {
//     winner,
//     simple,
//     complicated
// }
function sumValue(arr) {
    return arr.reduce((acc, curr) => acc + Number(curr), 0);
}

function simpleCounting(arr, number) {
    let sum1 = [];
    let sum2 = [];
    let result = 0;

    arr.forEach((el, i) => {
        (i < number / 2) ? sum1.push(el) : sum2.push(el);
    });
    // let left = Math.floor(min / 1000);
    // let right = min % 1000;

    (sumValue(sum1) === sumValue(sum2)) ? result += 1 : result;
    return result;
}

function complicatedCounting(arr) {
    let evenNumbersSum = [];
    let oddNumbersSum = [];
    let result = 0;

    arr.forEach(el => {
        (el % 2 === 0) ? evenNumbersSum.push(el) : oddNumbersSum.push(el);
    });

    (sumValue(evenNumbersSum) === sumValue(oddNumbersSum)) ? result += 1 : result;
    return result;
}


function getWinner(obj) {
    const NUMBERLENGTH_TICKET = 6;
    let simpleCounter = 0;
    let complicatedCounter = 0;
    let winner;


    for (let i = obj.min; i <= obj.max; i++) {

        let str = String(i);
        if (str.length < NUMBERLENGTH_TICKET) {
            str = str.padStart(NUMBERLENGTH_TICKET, "0");
        }

        let arr = str.split('');
        simpleCounter += simpleCounting(arr, NUMBERLENGTH_TICKET);
        complicatedCounter += complicatedCounting(arr);

    }

    (simpleCounter > complicatedCounter) ? winner = 'simple method' : winner = 'simple method';
    console.log(simpleCounter);
    console.log(complicatedCounter);
    return winner;
}

getWinner(context);










