describe("showChessBoard", () => {
    it("вводим корректные значения для ширины, высоты доски, символ *. Ожидаем отрисованную доску", () => {
        assert.equal(showChessBoard('5', 4, '*'), '\n  * * \n * * \n  * * \n * * \n');
    });

    it("вводим некорректные значения для ширины - строку которую невозможно преобразовать в число." +
        " Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(showChessBoard('sveta', 4, '*'), { status: 'failed', reason: 'wrong input values' });
    });

    it("вводим некорректные значения для ширины - 0." +
        " Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(showChessBoard(0, 4, '*'), { status: 'failed', reason: 'wrong input values' });
    });

    it("вводим некорректные значения для символа - '***'." +
        " Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(showChessBoard(10, 4, '***'), { status: 'failed', reason: 'wrong input values' });
    });

    it("вводим некорректные значения для ширины - null." +
        " Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(showChessBoard(null, 4, '*'), { status: 'failed', reason: 'wrong input values' });
    });
});
