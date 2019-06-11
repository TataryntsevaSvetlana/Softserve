/*2.	Анализ конвертов
Есть два конверта со сторонами (a,b) и (c,d).
Требуется определить, можно ли один конверт вложить в другой.
Программа должна обрабатывать ввод чисел с плавающей точкой.

Входные параметры: объекты конверт1 и конверт2
Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.
*/

function fitInDiagonal(a, b, c, d) {
    return c > a && b >= (2 * c * d * a + (c * c - d * d) * Math.sqrt(c * c + d * d - a * a)) / (c * c + d * d);
}

function isValidNumber(num) {
   return Number(num) > 0;
}

function isObject(obj) {
    return obj && obj.constructor === Object;
}

function isValidValues(obj1, obj2) {
    const isObject1 = isObject(obj1);
    const isObject2 = isObject(obj2);
    const isValidValues1 = Object.values(obj1).every(isValidNumber);
    const isValidValues2 = Object.values(obj2).every(isValidNumber);

    return isObject1 && isObject2 && isValidValues1 && isValidValues2;
}

function showLetter(envelope1, envelope2) {

    if (isValidValues(envelope1, envelope2)) {
        let {a, b} = envelope1;
        let {c, d} = envelope2;

        if (a < b) {
            a = envelope1.b;
            b = envelope1.a;
        }

        if (c < d) {
            c = envelope2.d;
            d = envelope2.c;
        }

        if ((a > c && b > d) || fitInDiagonal(a, b, c, d)) {
           return  2;
        } else if ((c > a && d > b) || fitInDiagonal(c, d, a, b)) {
           return  1;
        }

        return  0;
    } else {
        return {status: 'failed', reason: 'wrong input values'};
    }
}


console.log(showLetter({ a: 100, b: 70 }, { c: 105, d: 15 }));






