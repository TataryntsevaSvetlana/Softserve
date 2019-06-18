/*
Angular date formatter
Angular provides a filter to correctly display the dates.
For this kata, we will only take into consideration the date and the format ( and let the timezone aside )
Here is the official documentation about the filter
We simplify the possible representations to the following :
**yyyy** : 4 digit representation of a year,padded (1970-9999)
**yy** : 2 digit representation of a year, padded (00-99)
**MM** : Month in a year, padded (01-12)
**M** : Month in a year (1-12)
**dd** : Day in a month, padded (01-31)
**d** : Day in a month (1-13)
**HH** : Hour in a day, padded (00-23)
**H** : Hour in a day (0-23)
**mm** : Minute in hour, padded (00-59)
**m** : Minute in hour (0-59)
**ss** : Second in minute, padded (00-59)
**s** : Second in minute (0-59)
the function dateFilter should take two arguments : date and format.
date can be the Date object, a number, or a String (convertible in a number)
format is the format of the output. Here are some examples :
'HH:mm' // Can return something like '12:04'
'dd/MM/yyyy' // Can return something like '01/02/1995'
'd/M/yy H%m' // Can return something like '1/31/14 1%59'
Where there is an odd number of letters, parse the longest first then the remaining if needed. For example, yyy shoud be parsed as [yy]y, ddd should be parsed as [dd][d].
When there are more than 2 of MdHms, for example, dddd it should be parsed as [dd][dd].

*/

function dateFilter(date, format){
    const error = {status: 'failed', description: 'please enter a valid date format'};

    if (Number.isFinite(date)) {
        date = new Date(date);
    } else if ( typeof date === 'string') {
        date = Date.parse(date);
    } else if (!date instanceof Date || isNaN(date)){
        return error;
    }

    let yyyy = date.getUTCFullYear();
    let yy = String(yyyy).slice(2);
    let M = date.getUTCMonth() + 1;
    let MM = getQuantitySymbols(String(date.getUTCMonth() + 1));
    let d = date.getUTCDate();
    let dd = getQuantitySymbols(String(date.getUTCDate()));
    let HH = getQuantitySymbols(String(date.getUTCHours()));
    let H = date.getUTCHours();
    let mm = getQuantitySymbols(String(date.getUTCMinutes()));
    let m = date.getUTCMinutes();
    let ss = getQuantitySymbols(String(date.getUTCSeconds()));
    let s = date.getUTCSeconds();
    let result = format;
    let regexp = [
        [/yyyy/g, yyyy],
        [/yy/g, yy],
        [/MM/g, MM],
        [/M/g, M],
        [/dd/g, dd],
        [/d/g, d],
        [/HH/g, HH],
        [/H/g, H],
        [/mm/g, mm],
        [/m/g, m],
        [/ss/g, ss],
        [/s/g, s]
    ];

    regexp.forEach(reg => (result = result.replace(reg[0], reg[1])));

    return result;
}
function getQuantitySymbols(number) {
    return number < 10 ? number = '0' + number: number;
}

console.log(dateFilter(new Date(0), 'HH:mm'));
console.log(dateFilter(0, 'dd/MM/yyyy'));
console.log(dateFilter(new Date(0), 'd/M/yy H%m'));
console.log(dateFilter(new Date(0), 'ss@mm == s@m'));



















//
// function dateFilter(date, str) {
//     if (typeof date === 'string') date = Date.parse(date);
//     if (Number.isFinite(date)) date = new Date(date);
//     if (!date instanceof Date || isNaN(date)) return 'Wrong date';
//
//     let yyyy = date.getUTCFullYear();
//     let yy = String(yyyy).slice(2);
//     let M = date.getUTCMonth() + 1;
//     let MM =
//         String(date.getUTCMonth()).length === 1
//             ? '0' + (date.getUTCMonth() + 1)
//             : date.getUTCMonth() + 1;
//     let d = date.getUTCDate();
//     let dd =
//         String(date.getUTCDate()).length === 1
//             ? '0' + date.getUTCDate()
//             : date.getUTCDate();
//     let HH =
//         String(date.getUTCHours()).length === 1
//             ? '0' + date.getUTCHours()
//             : date.getUTCHours();
//     let H = date.getUTCHours();
//     let mm =
//         String(date.getUTCMinutes()).length === 1
//             ? '0' + date.getUTCMinutes()
//             : date.getUTCMinutes();
//     let m = date.getUTCMinutes();
//     let ss =
//         String(date.getUTCSeconds()).length === 1
//             ? '0' + date.getUTCSeconds()
//             : date.getUTCSeconds();
//     let s = date.getUTCSeconds();
//
//     let result = str;
//     let reps = [
//         [/yyyy/g, yyyy],
//         [/yy/g, yy],
//         [/MM/g, MM],
//         [/M/g, M],
//         [/dd/g, dd],
//         [/d/g, d],
//         [/HH/g, HH],
//         [/H/g, H],
//         [/mm/g, mm],
//         [/m/g, m],
//         [/ss/g, ss],
//         [/s/g, s]
//     ];
//     reps.forEach(rep => (result = result.replace(rep[0], rep[1])));
//     return result;
// }
// console.log(dateFilter(new Date(0), 'HH:mm'));
// console.log(dateFilter(new Date(0), 'dd/MM/yyyy'));
// console.log(dateFilter(new Date(0), 'd/M/yy H%m'));



