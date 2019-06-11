describe("showLetter", () => {
    it("showLetter({ a: 100, b: 70 }, { c: 105, d: 15 }), 2", () => {
        assert.equal(showLetter({ a: 100, b: 70 }, { c: 105, d: 15 }), 2);
    });

    it("showLetter({ a: 34.01, b: 30 }, { c: 34, d: 1 }), 2", () => {
        assert.equal(showLetter({ a:34.01, b: 30 }, { c: 34, d: 1 }), 2);
    });

    it("showLetter({ a: 34, b: 1 }, { c: 30, d: 20.8 }), 1", () => {
        assert.equal(showLetter({ a: 34, b: 1 }, { c: 30, d: 20.8 }), 1);
    });

    it("showLetter({ a: 34, b: 5 }, { c: 30, d: 24.8 }), 1", () => {
        assert.equal(showLetter({ a: 34, b:5 }, { c: 30, d: 24.8 }), 1);
    });

    it("вводим размеры сторон при которых невозможно вложить конверты в другдруга. Ожидаем результат 0", () => {
        assert.equal(showLetter({a: 111, b: 1}, {c: 4, d: 111}), 0);
    });

    it("вводим некорректные размеры для первого конверта - длина = 0. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(showLetter({a: 0, b: 1}, {c: 4, d: 111}), {status: 'failed', reason: 'wrong input values'});
    });

    it(" вместо обьекта передаём массив. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(showLetter([0, 1], {c: 4, d: 111}), {status: 'failed', reason: 'wrong input values'});
    });

    it("вводим некорректное значение размера для первого конверта - длина = null. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(showLetter({a: null, b: 1}, {c: 4, d: 111}), {status: 'failed', reason: 'wrong input values'});
    });

});
