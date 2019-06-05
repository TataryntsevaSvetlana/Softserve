/*Plus - minus - plus - plus - ... - Sum
Given an array [x1, x2, ..., xn] determine whether it is possible to put + or - between the elements
and get an expression equal to sum. Result is boolean
2 <= n <= 22
0 <= xi <= 20
-10 <= sum <= 10
Example
arr = [1, 3, 4, 6, 8]
sum = -2
1 + 3 - 4 + 6 - 8 = -2
Result is: true
Notes
If it is impossible to find a solution then you should return false.
*/


function getSolution(inputArr, number) {
    const signsQuantity = inputArr.length - 1;

    for (let i = 0; i < Math.pow(2, signsQuantity); i++) {
        const combinations = [];
        for (let j = 0; j < signsQuantity; j++) {
            if ((i >> j) & 1) {
                combinations.push('+');
            } else {
                combinations.push('-');
            }
        }

        let result = inputArr[0];

        for (let k = 0; k < combinations.length; k++) {
            if (combinations[k] === '-') {
                result -= inputArr[k + 1];
            }

            if (combinations[k] === '+') {
                result += inputArr[k + 1];
            }
        }

        if (result === number) {
            return true;
        }
    }

    return false;
}

getSolution([1, 3, 4, 6, 8], -2);



