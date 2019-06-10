/*	
Вывести все числа Фибоначчи,
которые удовлетворяют переданному в функцию ограничению:
находятся в указанном диапазоне, либо имеют указанную длину.

Входные параметры: объект context с полями min и max, либо с полем length 
Выход: массив чисел



*/
const context = {
    min: 0,
    max: 50,
    length: undefined,
};

function getFibonacciNumbersInRange(context) {
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

getFibonacciNumbersInRange(context);










