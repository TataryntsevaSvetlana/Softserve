describe("showTriangles", () => {

    it(`showTriangles(showTriangles([{vertices: 'ABC', a: 10,  b: 20, c: 22.36},
    {vertices: 'DEF', d: 30, e: 40, f: 16.7},
    {vertices: 'GHI', g: 24.8, h: 15, i: 35},
    {vertices: 'KLM', k: 14.8, l: 35, m: 28}]),
     ['ABC', 'GHI', 'KLM', 'DEF']`, () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 10,  b: 20, c: 22.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 14.8, l: 35, m: 28}
        ]), ["ABC", "GHI", "KLM", "DEF"]);
    });

    it(`showTriangles(showTriangles([{vertices: 'ABC', a: 10,  b: 20, c: 22.36},
    {vertices: 'DEF', d: 30, e: 40, f: 16.7},
    {vertices: 'GHI', g: 24.8, h: 15, i: 35},
    {vertices: 'KLM', k: 14.8, l: 35, m: 28}]),
     ["GHI", "KLM", "DEF", "ABC"]`, () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 60,  b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 14.8, l: 35, m: 28}
        ]), ["GHI", "KLM", "DEF", "ABC"]);
    });



    it(`showTriangles(showTriangles([{vertices: 'ABC', a: 10,  b: 20, c: 22.36},
    {vertices: 'DEF', d: 30, e: 40, f: 16.7},
    {vertices: 'GHI', g: 24.8, h: 15, i: 35},
    {vertices: 'KLM', k: 14.8, l: 35, m: 28}]),
     {status: 'failed', reason: 'invalid values'}`, () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: null,  b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 7, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'invalid values'});
    });

    it(`showTriangles(showTriangles([{vertices: 'ABC', a: 10,  b: 20, c: 22.36},
    {vertices: 'DEF', d: 30, e: 40, f: 16.7},
    {vertices: 'GHI', g: 24.8, h: 15, i: 35},
    {vertices: 'KLM', k: 14.8, l: 35, m: 28}]),
     {status: 'failed', reason: 'invalid values'}`, () => {
        assert.deepEqual(showTriangles([
            {vertices: 'ABC', a: 60,  b: 35, c: 27.36},
            {vertices: 'DEF', d: 30, e: 40, f: 16.7},
            {vertices: 'GHI', g: 24.8, h: 15, i: 35},
            {vertices: 'KLM', k: 7, l: 3.5, m: 18}
        ]), {status: 'failed', reason: 'a triangle does not exist'});
    });

});
