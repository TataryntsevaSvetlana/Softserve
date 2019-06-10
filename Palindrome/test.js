describe("getPalindrome", () => {
    it("getPalindrome (getPalindrome(121145), 121)", () => {
        assert.equal(getPalindrome(121145), 121);
    });

    it("getPalindrome (getPalindrome(1234437), 3443)", () => {
        assert.equal(getPalindrome(1234437), 3443);
    });

    it("getPalindrome (getPalindrome(13654654987), 0)", () => {
        assert.equal(getPalindrome(13654654987), 0);
    });

    it("getPalindrome (getPalindrome(11211), 11211)", () => {
        assert.equal(getPalindrome(11211), 11211);
    });

    it("getPalindrome (getPalindrome(365461184987654), 11)", () => {
        assert.equal(getPalindrome(365461184987654), 11);
    });

    it("getPalindrome (getPalindrome(34545756867896), 686)", () => {
        assert.equal(getPalindrome(34545756867896), 686);
    });

    it("getPalindrome (getPalindrome(78965698),8965698)", () => {
        assert.equal(getPalindrome(78965698), 8965698);
    });

});
