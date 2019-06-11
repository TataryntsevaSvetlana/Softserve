describe("getPalindrome", () => {
    it("вводим 121145 ожидаем наибольший палиндром 121", () => {
        assert.equal(getPalindrome(121145), 121);
    });

    it("вводим 1234437 ожидаем наибольший палиндром  3443", () => {
        assert.equal(getPalindrome(1234437), 3443);
    });

    it("вводим 13654654987 ожидаем 0, т.к в числе нет палиндрома", () => {
        assert.equal(getPalindrome(13654654987), 0);
    });

    it("вводим 11211 ожидаем 11211, т.к число является палиндромом", () => {
        assert.equal(getPalindrome(11211), 11211);
    });

    it(" вводим кол-во символов больше 16. Ожидаем сообщение об ошибке", () => {
    assert.deepEqual(getPalindrome(74575686789457568678), { status: 'failed', reason: 'wrong input values' });
    });

    it(" вводим некорректные данные. Ожидаем сообщение об ошибке", () => {
        assert.deepEqual(getPalindrome('74575sveta'), { status: 'failed', reason: 'wrong input values' });
    });


});
