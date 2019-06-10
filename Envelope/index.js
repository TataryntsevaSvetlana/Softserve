
/*2.	Анализ конвертов
Есть два конверта со сторонами (a,b) и (c,d).
Требуется определить, можно ли один конверт вложить в другой.
Программа должна обрабатывать ввод чисел с плавающей точкой.

Входные параметры: объекты конверт1 и конверт2
Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.
*/
const fitInDiagonal = (a, b, p, q) => p > a && b >= (2 * p * q * a + (p * p - q * q) * Math.sqrt(p * p + q * q - a * a)) / (p * p + q * q);

function showLetter(envelope1, envelope2) {
    let { a, b } = envelope1;
    let { p, q } = envelope2;

    if (a < b) {
        a = envelope1.b;
        b = envelope1.a;
    }

    if (p < q) {
        p = envelope2.q;
        q = envelope2.p;
    }

    if ((a > p && b > q) || fitInDiagonal(a, b, p, q)) {
        return 1;
    } else if ((p > a && q > b) || fitInDiagonal(p, q, a, b)) {
        return 2;
    }

    return 0;
}

// console.log(showLetter({ a: 100, b: 70 }, { p: 105, q: 10 }));
// console.log(showLetter({ a: 20.8, b: 30 }, { p: 34, q: 1 }));
// console.log(showLetter({ a: 34, b: 1 }, { p: 30, q: 20.8 }));
// console.log(showLetter({ a: 34, b: 2 }, { p: 30, q: 20.8 }));

console.log(showLetter({ a: 1, b: 1 }, { p: 4, q: 111 }));





