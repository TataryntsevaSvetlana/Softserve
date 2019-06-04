/*
Next Version
You're fed up about changing the version of your software manually.
Instead, you will create a little script that will make it for you.
Exercice
Create a function nextVersion, that will take a string in parameter,
and will return a string containing the next version number.

For example:
nextVersion("1.2.3") === "1.2.4";
nextVersion("0.9.9") === "1.0.0";
nextVersion("1") === "2";
nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
nextVersion("9.9") === "10.0";

Rules
All numbers, except the first one, must be lower than 10: if there are,
you have to set them to 0 and increment the next number in sequence.
*/

function isValidArr(arr) {
    const isArray = Array.isArray(arr);
    const correctVersions = arr.every((num, i) => {
        if (i === 0) {
            return !isNaN(num);
        }

        return num && Number(num) < 10
    });

    return isArray && correctVersions;
}

function nextVersion(value) {
    const valueArr = value.split('.');
    const lengthArr = valueArr.length;

    if (!isValidArr(valueArr)) {
        return 'wrong data';
    }

    valueArr[lengthArr - 1] = Number(valueArr[lengthArr - 1]) + 1;

    for (let i = lengthArr - 1; i > 0; i--) {
        const previousDigit = Number(valueArr[i - 1]);

        if (Number(valueArr[i]) === 10) {
            valueArr[i] = 0;
            valueArr[i - 1] = previousDigit + 1;
        }
    }

    return valueArr.join('.');
}
// nextVersion("0.9.9");
// nextVersion("1.2.3");
// nextVersion("0.9.9");
nextVersion("1");
// nextVersion("1.2.3.4.5.6.7.8");



