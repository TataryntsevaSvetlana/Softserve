describe("showTriangles", () => {

    it('Вводим коректные данные сторон треугольника и названия вершин, получаем отсортированный массив площадей треугольников в порядке убывания', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 10, b: 20, c: 22.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 14.8, l: 35, m: 28}
        ]), ["ABC", "GHI", "KLM", "DEF"]);
    });


    it('Вводим коректные данные сторон треугольника и названия вершин, получаем отсортированный массив площадей треугольников в порядке убывания', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 14.8, l: 35, m: 28}
        ]), ["GHI", "KLM", "DEF", "ABC"]);
    });


    it('Вводим некорректные значения сторон треугольника, при которых невозможно построить треугольник и посчитать его площадь, ожидаемый результат - сообщение об ошибке', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 7, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'invalid values'});
    });

    it('Вводим некорректные значения сторон треугольника (строку, которую невозможно привести к числу), ожидаемый результат - сообщение об ошибке', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 'sveta', f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 7, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'invalid values'});
    });


    it('Вводим некорректное название треугольника ("ZWR" не соответствует сторонам a,b,c), ожидаемый результат - сообщение об ошибке', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ZWR', a: 60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 17, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'invalid values'});
    });

    it("Вводим некорректное значение стороны треугольника  - отрицательное число, ожидаемый результат - сообщение об ошибке", () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: -60, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 17, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'invalid values'});
    });

    it('Вводим некорректное значение стороны треугольника  - undefined, ожидаемый результат - сообщение об ошибке', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: undefined, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 17, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'invalid values'});
    });

    it('Вводим некорректное значение стороны треугольника  - null, ожидаемый результат - сообщение об ошибке', () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: null, b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 17, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'invalid values'});
    });

});
