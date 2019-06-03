function substrMethod(inputString, positionStart, length) {
    let result = '';
    let newArr = [];

    if (positionStart > 0 && positionStart >= inputString.length) {
        return result;

    } else if (length === 0 || length < 0){
        return result;

    } else if (positionStart < 0 && Math.abs(positionStart) >= inputString.length) {
        positionStart = 0;

        if (length) {
            for (let i = positionStart; i < length; i++) {
                newArr.push(inputString[i]);
            }
        } else {
            for (let i = positionStart; i < inputString.length; i++) {
                newArr.push(inputString[i]);
            }
        }
        return newArr.join('');

    } else if (positionStart < 0 && Math.abs(positionStart) < inputString.length ) {

        if (length) {
            for (let i = inputString.length + positionStart; i < inputString.length + positionStart + length; i++) {
                newArr.push(inputString[i]);
            }
        } else {
            for (let i = inputString.length + positionStart; i < inputString.length; i++) {
                newArr.push(inputString[i]);
            }
        }

        return newArr.join('');

    } else if (positionStart > 0 && positionStart < inputString.length) {

        if (length) {
            for (let i = positionStart; i < positionStart + length; i++) {
                newArr.push(inputString[i]);
            }
        } else {
            for (let i = positionStart; i < inputString.length; i++) {
                newArr.push(inputString[i]);
            }
        }

        return newArr.join('');
    }
}

substrMethod('слоненок слоня серенький', 2, 10);

