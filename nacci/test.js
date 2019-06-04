describe("nacci", () => {
    it("передаём пустой паттерн", () => {
        assert.deepEqual(nacci([], 10), []);
    });

    it("передаём число равное 0", () => {
        assert.deepEqual(nacci(['fib'], 0), []);
    });

    it("вывести 10 чисел fibonacci", () => {
        assert.deepEqual(nacci(['fib'], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it("вывести 10 чисел padovan", () => {
        assert.deepEqual(nacci(['pad'], 10), [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]);
    });

    it("вывести 10 чисел jacobstahl", () => {
        assert.deepEqual(nacci(['jac'], 10), [0, 1, 1, 3, 5, 11, 21, 43, 85, 171]);
    });

    it("вывести 10 чисел pell", () => {
        assert.deepEqual(nacci(['pel'], 10), [0, 1, 2, 5, 12, 29, 70, 169, 408, 985]);
    });

    it("вывести 10 чисел tribonacci", () => {
        assert.deepEqual(nacci(['tri'], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
    });

    it("вывести 10 чисел tetranacci", () => {
        assert.deepEqual(nacci(['tet'], 10), [0, 0, 0, 1, 1, 2, 4, 8, 15, 29]);
    });

    it("вывести 10 чисел fibonacci, tetranacci", () => {
        assert.deepEqual(nacci(['fib', 'tet'], 10), [0, 0, 1, 0, 1, 0, 2, 1, 3, 1]);
    });

    it("вывести 10 чисел jacobstahl, jacobstahl, pell", () => {
        assert.deepEqual(nacci(['jac', 'jac', 'pel'], 10), [0, 1, 0, 1, 3, 1, 5, 11, 2, 21]);
    });
    it("если длина паттерна больше числа, повторить паттерн", () => {
        assert.deepEqual(nacci(['jac', 'jac', 'pel'], 2), [0, 1]);
    });
});
