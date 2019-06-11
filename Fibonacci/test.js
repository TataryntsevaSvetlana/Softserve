describe("getFibonacciNumbersInRange", () => {
    it("Ожидаем ряд из двузначных чисел", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 0, max: 100, length: 2}), [ 13, 21, 34, 55, 89 ]);
    });

    it("Ожидаем ряд из 4х значных чисел", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 5, max: 10000, length: 4}), [1597, 2584, 4181, 6765]);
    });

    it("Вводим некорректные данные min > max. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 5896, max: 56, length: 4}),{ status: 'failed', reason: 'wrong input values' });
    });

    it("не указываем длину. Ожидаем ряд чисел в диапазоне из любого кол-ва символов", () => {
        assert.deepEqual(getFibonacciNumbersInRange({ min: 56, max: 459, length: undefined}), [89, 144, 233, 377]);
    });
});
