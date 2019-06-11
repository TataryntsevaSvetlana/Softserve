/*	
Вывести все числа Фибоначчи,
которые удовлетворяют переданному в функцию ограничению:
находятся в указанном диапазоне, либо имеют указанную длину.

Входные параметры: объект context с полями min и max, либо с полем length 
Выход: массив чисел



*/

function isValidInput(obj) {
    const isObject = obj && obj.constructor === Object;
    const { min, max, length } = obj;
    const validValues = isFinite(min) && isFinite(max) && min < max && min >= 0;
    const validLength = length === undefined|| isFinite(length) && length > 0;

    return isObject && validValues && validLength;
}

function getFibonacciNumbersInRange(context) {
    if (isValidInput(context)) {
        let f1 = 0, f2 = 1, f3 = 1;

        let result = [];
        while (f1 <= context.max) {
            if (f1 >= context.min) {
                if (context.length && String(f1).length === context.length) {
                    result.push(f1);
                } else if (!context.length) {
                    result.push(f1);
                }

            }

            f1 = f2;
            f2 = f3;
            f3 = f1 + f2;
        }

        return result;
    }
    return { status: 'failed', reason: 'wrong input values' };
}

const context = {
    min: 56, max: 459
};
console.log(getFibonacciNumbersInRange(context));










