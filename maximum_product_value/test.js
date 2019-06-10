describe("findPartMaxProd", () => {
    it("findPartMaxProd(8), [[3, 3, 2], 18]", () => {
        assert.equal(findPartMaxProd(8), [[3, 3, 2], 18]);
    });

    it("findPartMaxProd(10), [[4, 3, 3], [3, 3, 2, 2], 36]", () => {
        assert.equal(findPartMaxProd(10), [[4, 3, 3], [3, 3, 2, 2], 36]);
    });

});
