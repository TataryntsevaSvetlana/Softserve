/*3.
Проверить является ли число или его часть палиндромом.
Например, число 1234437 не является палиндромом,
но является палиндромом его часть 3443.
Числа меньшие, чем 10 палиндромом не считать.

Входные параметры: число
Выход: извлечённый из числа палиндром либо 0, если извлечение не удалось.

*/

function isValidNumber(num) {
    return Number.isInteger(num) && num > 0 && String(num).length <= 16;
}

function isPalindrome(inputNumber) {
    let reversed = String(inputNumber).split('').reverse().join('');

    return Number(inputNumber) > 10 && reversed === String(inputNumber);
}

function getPalindrome(inputNumber) {
    let results = [0];

    if (isValidNumber(Number(inputNumber))) {
        if (!isPalindrome(inputNumber)) {
            const string = String(inputNumber);
            const symbolsQuantity = string.length;

            for (let i = 0; i < symbolsQuantity; i++) {
                for (let k = 0; k < symbolsQuantity; k++) {
                    const numberFromStart = string.slice(i, symbolsQuantity - k);
                    const numberFromEnd = string.slice(k, symbolsQuantity - 1);

                    if (isPalindrome(numberFromEnd)) {
                        results.push(Number(numberFromEnd));
                    }

                    if (isPalindrome(numberFromStart)) {
                        results.push(Number(numberFromStart));
                    }
                }
            }
        } else {
            results.push(Number(inputNumber));
        }
        return Math.max(...results);

    } else {
        return { status: 'failed', reason: 'wrong input values' };
    }
}