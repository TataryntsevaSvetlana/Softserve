describe("getWinner", () => {
    it("вводим корректные значения для min, max. Ожидаем, что простой способ выдаст больший результат", () => {
        assert.deepEqual(getWinner({ min: 1, max: 999999 }), {winner: "simple method", simple: 55251, complicated: 25080});
    });

    it("вводим корректные значения для min, max. Ожидаем, что простой способ выдаст больший результат", () => {
        assert.deepEqual(getWinner({ min: 1, max: 111111 }), {winner: "simple method", simple: 5133, complicated:  4001});
    });

    it("вводим некорректное значение: min > max. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getWinner({ min: 888888, max: 111999 }), { status: 'failed', reason: 'wrong input values' });
    });

    it("вводим только min. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getWinner({  min: 111999 }), { status: 'failed', reason: 'wrong input values' });
    });

    it("вводим некорректное значение: min = null. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getWinner({  min: null, max: 181999 }), { status: 'failed', reason: 'wrong input values' });
    });

    it("вводим не обьект, а массив. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getWinner([7, 181999]), { status: 'failed', reason: 'wrong input values' });
    });
});
