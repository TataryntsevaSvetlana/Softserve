describe("countdown", () => {


    it("countdown(-154800000) return '-43:00:00'", () => {
        assert.equal(countdown(-154800000), '-43:00:00');
    });

    it("countdown(0) return '+00:00:00'", () => {
        assert.equal(countdown(0), '+00:00:00');
    });

    it("countdown(61000) return '+00:01:01'", () => {
        assert.equal(countdown(61000), '+00:01:01');
    });

    it("countdown(360000000) return '+100:00:00'", () => {
        assert.equal(countdown(360000000), '+100:00:00');
    });


});
