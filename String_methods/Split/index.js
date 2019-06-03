function splitMethod(inputString, separator, limit) {
    let resultArr = [];

    if (separator === undefined) {
        console.log([inputString]);
        return [inputString];

    } else if (separator === '') {
        for (let i = 0; i < inputString.length; i++ ) {
            resultArr.push(inputString.charAt(i));
        }

        return resultArr;

    } else {
        let currentIndex = 0;

        for (let i = 0; i < inputString.length; i++) {
            if (i === inputString.indexOf(separator)) {

                let partOfString = inputString.slice(currentIndex, i);
                currentIndex = i + separator.length;
                inputString = inputString.slice(currentIndex);
                currentIndex = 0;
                i = 0;
                resultArr.push(partOfString);
            }
            if (inputString.indexOf(separator) === -1) {
                resultArr.push(inputString);
                break;
            }
        }
    }

    if (limit !== undefined) {
        resultArr.length = limit;
    }
    console.log(resultArr);
    return resultArr;
}
splitMethod('Быть или не быть, вот в чём вопрос', 'быть');



