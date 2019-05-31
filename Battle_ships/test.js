describe("damagedOrSunk", () => {
    it("корректность расчёта баллов", () => {
        assert.deepEqual(damagedOrSunk(
            [[0,0,2,2,2,2], [0,3,0,0,0,0], [0,3,0,1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]), {totalSunk: 0, totalDamage: 2, totalNotTouched: 1, totalPoints: 0});
    });

    it("ввели не число, а строку", () => {
        assert.deepEqual(damagedOrSunk(
            [[0,0,2,2,2,2], [0,3,0,0,0,0], [0,3,'a',1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]), {status: 'input values are invalid'});
    });

    it("ввели не число, а null", () => {
        assert.deepEqual(damagedOrSunk(
            [[0,0,2,2,2,2], [0,3,0,0,0,0], [0,3,null,1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]), {status: 'input values are invalid'});
    });

    it("ввели не число, а undefined", () => {
        assert.deepEqual(damagedOrSunk(
            [[0,0,2,2,2,2], [0,3,0,0,0,0], [0,3,undefined,1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]), {status: 'input values are invalid'});
    });

    it("ввели не число, а NaN", () => {
        assert.deepEqual(damagedOrSunk(
            [[0,0,2,2,2,2], [0,3,0,0,0,0], [0,3,NaN,1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]), {status: 'input values are invalid'});
    });

    it("ввели число большее, чем допустимый номер корабля", () => {
        assert.deepEqual(damagedOrSunk(
            [[0,0,2,2,2,2], [0,3,0,0,0,0], [0,3,9,1,0,0], [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]), {status: 'input values are invalid'});
    });

    it("корректность расчёта баллов", () => {
        assert.deepEqual(damagedOrSunk(
            [[3,3,3,0,0,0], [0,0,0,0,0,0], [0,0,0,2,0,0], [0,0,0,2,0,0]], [[3, 4], [4, 1], [4, 2]]), {totalSunk: 0, totalDamage: 1, totalNotTouched: 1, totalPoints: -0.5});
    });
    it("корректность расчёта баллов", () => {
        assert.deepEqual(damagedOrSunk(
            [[3,3,3,0,0,0], [0,0,0,0,0,0], [0,0,0,2,0,0], [0,0,0,2,0,0]], [[3, 4], [4, 1], [4, 2]]), {totalSunk: 0, totalDamage: 1, totalNotTouched: 1, totalPoints: -0.5});
    });


});
