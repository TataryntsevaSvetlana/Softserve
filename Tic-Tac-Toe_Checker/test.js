describe("gameChecker", () => {
    it("игра не окончена (-1)", () => {
        assert.equal(gameChecker([[0,1,1], [0,1,2], [2,1,2]]), -1);
    });
    it("неверно введены данные", () => {
        assert.equal(gameChecker([[2,'2',1], [0,1,2], [2,1,2]]), 'input values are invalid');
    });

    it("побел X (1) по горизонтали", () => {
        assert.equal(gameChecker([[1,1,1], [2,1,2], [2,1,2]]), 1);
    });

    it("побел X (1) по вертикали", () => {
        assert.equal(gameChecker([[2,1,1], [1,1,2], [2,1,2]]), 1);
    });

    it("побел Х (1) по диагонали", () => {
        assert.equal(gameChecker([[1,2,2], [2,1,1], [2,1,1]]), 1);
    });

    it("побел O (2) по горизонтали", () => {
        assert.equal(gameChecker([[1,1,2], [1,2,2], [2,1,2]]), 2);
    });

    it("побел O (2) по вертикали", () => {
        assert.equal(gameChecker([[1,1,2], [2,1,1], [2,2,2]]), 2);
    });

    it("побел O (2) по диагонали", () => {
        assert.equal(gameChecker([[1,1,2], [1,2,1], [2,1,2]]), 2);
    });

    it("победителя нет (0), ничья", () => {
        assert.equal(gameChecker([[1,2,1], [2,1,2], [2,1,2]]), 0);
    });
});
