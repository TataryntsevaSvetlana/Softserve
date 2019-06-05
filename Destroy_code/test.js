describe("NumC", () => {

    it("toData - строку переводит в число, меняет запятые на точку", () => {
        assert.strictEqual(NumC.toData('25,698'), 25.698);
    });

    it("toData - убирает пробелы и точки в строке и возвращает число", () => {
        assert.strictEqual(NumC.toData('          2.   5,6   98'), 25.698);
    });

    it("toData - убирает неразрывный пробел в строке и возвращает число", () => {
        assert.strictEqual(NumC.toData('25,&nbsp;698'), 25.698);
    });

    it("toData - принимает строку и возвращает тип данных число", () => {
        assert.typeOf(NumC.toData('string'), 'number');
    });

    it("toData - принимает число с точкой и возвращает число без точки", () => {
        assert.equal(NumC.toData(25.698), 25698);
    });

    it("convertToBuh - если передаёшь число без дробной части, то добавляется запятая и 3 символа ", () => {
        assert.equal(NumC.convertToBuh(25, 0, 'hrn'), "25,000 hrn");
    });

    it("convertToBuh - если передаёшь число с дробной частью больше переданного значения decimals, то округляется до decimals символов ", () => {
        assert.equal(NumC.convertToBuh(234.4565424524, 5, 'hrn'), "234,45654 hrn");
    });

    it("convertToBuh - если не задана валюта ,то возвращает строку", () => {
        assert.equal(NumC.convertToBuh(234.4565424524, 5, 'hrn'), "234,45654 hrn");
    });

    it("isNumeric - если передаёшь num как NaN возвращает false", () => {
        assert.equal(NumC.isNumeric(NaN), false);
    });
    it("isNumeric - если передаёшь num как число возвращает true", () => {
        assert.equal(NumC.isNumeric(895.36), true);
    });

    it("toBuh - если передаёшь num как число, то возвращает строку с валютой ", () => {
        assert.equal(NumC.toBuh(234.4565424524, 5, 'hrn'), "234,45654 hrn");
    });

    it("toBuh - если передаёшь num как не число, то возвращает значение как есть ", () => {
        assert.equal(NumC.toBuh('fjfgbfk', 5, 'hrn'), 'fjfgbfk');
    });

    it("getFALDates  sadsadsad", () => {
        const testClassName = 'testClassName';

        const firstDateElContainer = document.createElement('div');
        const lastDateElContainer = document.createElement('div');
        const firstDateEl =  document.createElement('div');
        const lastDateEl =  document.createElement('div');

        firstDateEl.className = testClassName;
        lastDateEl.className = testClassName;
        firstDateEl.innerText = '1';
        lastDateEl.innerText = '2';

        firstDateElContainer.appendChild(firstDateEl);
        lastDateElContainer.appendChild(lastDateEl);

        assert.deepEqual(NumC.getFALDates([firstDateElContainer, lastDateElContainer], `.testClassName`), {last: "2001-01-01", first: "2001-02-01"});

    });






});


