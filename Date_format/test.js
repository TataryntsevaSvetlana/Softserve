describe("getSolution", () => {
    it("при передачи обьекта data co значением 0 и форматом 'dd/MM/yyyy' ожидаем '01/01/1970' ", () => {
        assert.equal(dateFilter(new Date(0),'dd/MM/yyyy'), '01/01/1970');
    });

    it("'при передачи числа 0 и форматом 'd/M/yy H%m' ожидаем '1/1/70 0%0'", () => {
        assert.equal(dateFilter(0,'d/M/yy H%m'), '1/1/70 0%0');
    });

    it("при передачи обьекта data co значением 0 и форматом 'HH:mm' '00:00'", () => {
        assert.equal(dateFilter(new Date(0), 'HH:mm' ), '00:00');
    });

    it("при передачи обьекта data co значением 0 и форматом 'ss@mm == s@m' '00@00 == 0@0' ", () => {
        assert.equal(dateFilter(new Date(0), 'ss@mm == s@m' ), '00@00 == 0@0');
    });
});
