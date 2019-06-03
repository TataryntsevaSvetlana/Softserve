function includesMethod(inputString, searchElement, position = 0) {
    let result = false;

    for (let i = position; i < inputString.length; i++) {
        let matchedTimes = 0;
        if (inputString[i] === searchElement[0]) {
            result = true;
            matchedTimes++;

            for (let j = 1; j < searchElement.length; j++) {
                if (inputString[i + j] === searchElement[j]) {
                    matchedTimes++;
                }

                if (matchedTimes === searchElement.length) {
                    return result;
                }
            }
            matchedTimes = 0;
            result = false;
        }
    }
    return result;
}

includesMethod('слоненок слоня серенький', 'слоня');


