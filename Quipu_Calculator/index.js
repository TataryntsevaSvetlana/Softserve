/*
Quipu Calculator
The Quipu is the numbering system of the ancient Incas.
A number is represented by knots in a string, using a positional representation (in base-10).
The representation of 123: one knot + space + two knots + space + three knots
Zeros are represented using a blank space. (leading zeros are not allowed)
@ is a knot and ~ is a space.
123 => @~@@~@@@
20 => @@~~
Create a method that calculates mathematical expressions in quipu format.
Input
A string representing a mathematical expression with operands in the quipu format above, separated by the plus [+] or minus [-] or division [/] or multiplication [*] sign.
*Hint1: The expression can also include parenthesis to change order of operation.
*Hint2: Between two 0-s you have to put a space, but between a 0 and 1 for example you haven't.
@~@ => 11
@~~@ => 101
@~~~@ => 1001
@ ~     ~ ~     ~ @ => 1001 (!!)
1 space 0 space 0 1
Output
A string representing the result of the mathematical expression in quipu format.
Example:
calculate("@~@@*@@")
=> "@@~@@@@"
calculate("@~@@+@@~~")
=> "@@@~@@"
*/

function toQuipu(number) {
    let quipu = '';

    for (let i = 0; i < number.length; i++) {
        if (number[i] !== '0') {
            quipu += '@';
            if (i !== number.length - 1) {
                quipu += '~';
            }
        }
        if (number[i] === '0') {
            quipu += '~';
            if (number[i + 1] === '0') {
                quipu += '~';
            }
        }
    }

    return quipu;
}

function toNumber(quipu) {
    const arr = quipu.split('~');
    return arr.reduce((acc, symbols, i) => {
        if (symbols.length !== 0) {
            acc += symbols.length;
            return acc;
        }

        if (symbols.length === 0 && arr[i + 1] !== undefined && arr[i + 1].length === 0) {
            acc += '0';
        }

        return acc;
    }, '')
}



function calculator(inputString) {
    // const res = /[-*/()+]/;
    const res = /(~?@?)/g;

    const result = inputString.replace(res, toNumber);

    return eval(result);
}

calculator('@~~*@@/@@@@-@@');





