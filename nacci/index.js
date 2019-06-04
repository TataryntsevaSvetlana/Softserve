function padovan(n) {
    if (n === 0) {
        return 1;
    }
    if (n <= 2) {
        return 0;
    }
    const arr = [];
    arr[0] = 1;
    arr[1] = 0;
    arr[2] = 0;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 3];
    }
    return arr[n];
}

function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function jacobstahl(n) {
    if (n < 2) {
        return n;
    }
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + 2 * arr[i - 2];
    }
    return arr[n];
}

function pell(n) {
    if (n < 2) {
        return n;
    }
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = 2 * arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

function tribonacci(n) {
    if (n === 0 || n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    const arr = [];
    arr[0] = 0;
    arr[1] = 0;
    arr[2] = 1;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr[n];
}

function tetranacci(n) {
    if (n < 3) {
        return 0;
    }
    if (n === 3) {
        return 1;
    }
    const arr = [];
    arr[0] = 0;
    arr[1] = 0;
    arr[2] = 0;
    arr[3] = 1;
    for (let i = 4; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4];
    }
    return arr[n];
}


function nacci(inputArr, number) {
    const obj = {
        fib: { counter: 0, function: fibonacci },
        pad: { counter: 0, function: padovan },
        jac: { counter: 0, function: jacobstahl },
        pel: { counter: 0, function: pell },
        tri: { counter: 0, function: tribonacci },
        tet: { counter: 0, function: tetranacci }
    };

    let result = [];

    if (inputArr.length === 0 || number === 0) {
        return result;
    }

    let counter = 0;

    for (let i = 0; i <= number; i++) {

        if (i === inputArr.length) {
            i = 0;
        }
        const element = obj[inputArr[i]];
        result.push(element.function(element.counter));

        element.counter++;
        counter++;
        if (number === counter) {
            break;
        }
    }

    console.log('result', result);
    return result;
}
nacci(['fib', 'pad', 'pel'], 6);
// nacci([], 6);
// nacci(['fib'], 10);
// nacci(['pad'], 10);
// nacci(['jac'], 10);
// nacci(['pel'], 10);
// nacci(['tri'], 10);
// nacci(['tet'], 10);
// nacci(['fib', 'tet'], 10);
// nacci(['jac', 'jac', 'pel'], 10);
nacci(['jac', 'jac', 'pel'], 2);

