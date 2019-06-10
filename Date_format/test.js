describe("getSolution", () => {
    it("getSolution([1, 3, 4, 6, 8], -2), true", () => {
        assert.equal(getSolution([1, 3, 4, 6, 8], -2), true);
    });

    it("getSolution([15, 2, 3], 10), true", () => {
        assert.equal(getSolution([15, 2, 3], 10), true);
    });

    it("getSolution([1, 5, 3, 2, 5], -2), false", () => {
        assert.equal(getSolution([1, 5, 3, 2, 5], -2), false);
    });

    it("getSolution([1, 5, 3, 4, 6, 7, 9, 2], -3), true", () => {
        assert.equal(getSolution([1, 5, 3, 4, 6, 7, 9, 2], -3), true);
    });

});
