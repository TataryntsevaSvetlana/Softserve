describe("getNumericSequence", () => {
    it("вводим корректные даные (8, 512), ожидаем ряд из 8 чисел: '23, 24, 25, 26, 27, 28, 29, 30'", () => {
        assert.equal(getNumericSequence(8, 512), '23, 24, 25, 26, 27, 28, 29, 30');
    });

    it("вводим корректные даные(4.5, 12),  ожидаем ряд из 5 чисел: '4, 5, 6, 7, 8'", () => {
        assert.equal(getNumericSequence(4.5, 12), '4, 5, 6, 7, 8');
    });

    it("вводим некорректное значение для длины ряда = 0. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getNumericSequence(0, 14), { status: 'failed', reason: 'wrong input values' });
    });

    it("вводим значения строками '3', '14', ожидаем, что программа преобразует значения в числа и выведет ряд", () => {
        assert.deepEqual(getNumericSequence('3', '14'), '4, 5, 6');
    });

    it("вводим некорректное значение для длины ряда = NaN. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getNumericSequence(NaN, 14), { status: 'failed', reason: 'wrong input values' });
    });

});
