/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/




// ****************** first variant ***************************
//
function toSortValue(value) {
// разбиваем строку на массив из строк
    const arr = value.split(' ');

 // итерируемся по каждому элементу массива, т.е по словам, разбивая их на символы,
 // и для каждой строки (слова) через find находим символ, который является числом;

    let newArr = arr.map((element) => {
        const position = element
            .split('')
            .find(el => !isNaN(el));

// возвращаем обьект в котором указано слово и соответствующее число;
            return {
                word: element,
                position: position
            }
        }
    );
// сортируем новый массив из обьектов по ключу "позиция";
    newArr.sort((a, b) => {
        if (a.position > b.position) {
            return 1;
        }
        return -1;
    });

// создаем новый массив из значений (вытянутых из обьектов) и склеиваем массив в строку с помощью join;
    const newString = newArr.map(el => el.word).join(' ');
    console.log(newString);

    return newString.trim();
}

toSortValue('4of Fo1r pe6ople g3ood th5e the2');



// ****************** second variant ***************************

function toSortValue(value) {
// разбиваем строку на массив из строк
    const arr = value.split(' ');

    // итерируемся по каждому элементу массива, т.е по словам,
    // и для каждой строки (слова) через регулярное выражение находим цифру;

    let newArr = arr.map((element) => {
        const position = element.match(/\d/);
// возвращаем обьект в котором указано слово и соответствующее число;
        return {
            word: element,
            position: position
        }
    });
// сортируем новый массив из обьектов по ключу "позиция";
    newArr.sort((a, b) => {
        if (a.position > b.position) {
            return 1;
        }
        return -1;
    });

// создаем новый массив из значений (вытянутых из обьектов) и склеиваем массив в строку с помощью reduce;
    const newString = newArr.reduce((accumulator, currentValue ) => {
        return (accumulator + currentValue.word + ' ')}, '');

    console.log(newString);

    return newString.trim();
}

toSortValue('is2 Thi1s T4est 3a');


//Version 2
function sortString(givenString) {
    let resultString = [];
    if(givenString.length === 0) {
        return givenString;
    }
    resultString = givenString.split(' ').sort(function(a, b) {
        return a.replace(/\D/g,"") - b.replace(/\D/g,"");
        // Number(a.replace(/\D/g,""), 10) - Number(b.replace(/\D/g,""), 10);
    }).join(' ');
    return resultString;
}

console.log(sortString("is2 Thi1s T4est 3a"));
console.log(sortString(""));









