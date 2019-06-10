/*3.	Сортировка треугольников
Вывести треугольники в порядке убывания их площади.
Входные параметры: массив объектов треугольник
Выход: упорядоченный массив имён треугольников
Примечание:
•	Расчёт площади треугольника должен производится по формуле Герона.
•	Каждый треугольник определяется именами вершин и длинами его сторон.
•	Приложение должно обрабатывать ввод чисел с плавающей точкой:
{
    vertices: ‘ABC’,
    a: 10,
    b: 20,
    c: 22.36
}
*/

function isValidValues(triangles){
    const isArray = Array.isArray(triangles);
    const isArrayLength = triangles.length;
    const isArrayValuesValid =  triangles
        .every(({ vertices, ...obj}) => {
        return Object.values(obj).every(value => typeof value === 'number');
    });
    return isArray && isArrayLength && isArrayValuesValid;
}


function calculateAreasOfTriangles({vertices, ...trianglesTops}){
    let result;
    let [a, b, c] = Object.values(trianglesTops);

    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        const p = ((a + b + c) / 2);
        const triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        result = {vertices, ...trianglesTops, triangleArea};
    } else {
        result = {status: 'failed', reason: 'a triangle does not exist'};
    }

   return result;
}


function showTriangles(triangles) {
    let result;

    if (isValidValues(triangles)) {
        return triangles
            .map(calculateAreasOfTriangles)
            .sort((a, b) => {
                if (a.triangleArea < b.triangleArea) {
                    return -1;
                }
                return 1;
            })
            .map(triangle => triangle.vertices);

    } else {
        result = {status: 'failed', reason: 'invalid values'}
    }
    return result;
}

console.log(showTriangles([
    {vertices: 'ABC', a: 60,  b: 35, c: 27.36},
    {vertices: 'DEF', d: 30, e: 40, f: 16.7},
    {vertices: 'GHI', g: 24.8, h: 15, i: 35},
    {vertices: 'KLM', k: 7, l: 3.5, m: 18}
]));










