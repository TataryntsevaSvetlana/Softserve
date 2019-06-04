

//  ********************* first variant ****************************

const fruitsFirstGroup = ['apple', 'banana','orange','lemon'];
const fruitsSecondGroup = ['pear', 'strawberry','cherry', 'melon'];

const COST_FIRST_GROUP = 5;
const COST_SECOND_GROUP = 7;
const COST_OTHER_GROUP = 9;

function countCost(...fruits){
    let totalCost = 0;

    for (let i = 0; i < fruits.length; i++) {
        if (fruitsFirstGroup.includes(fruits[i])){
            totalCost += COST_FIRST_GROUP;
        } else if (fruitsSecondGroup.includes(fruits[i])){
            totalCost += COST_SECOND_GROUP;
        } else {
            totalCost += COST_OTHER_GROUP;
        }
    }
    const result = totalCost / fruits.length;
    console.log('cost: ' + result+ ' $');
    return result;
};
countCost('banana','cherry','lemon', 'pear','orange','raspberries');






//  ********************* second variant ****************************
//
// const fruitsFirstGroup = ['apple', 'banana','orange','lemon'];
// const fruitsSecondGroup = ['pear', 'strawberry','cherry', 'melon'];
//
// const COST_FIRST_GROUP = 5;
// const COST_SECOND_GROUP = 7;
// const COST_OTHER_GROUP = 9;
//
// function countCost(...fruits){
//     let totalCost = 0;
//
//     fruits.forEach (function callback(el){
//         if (fruitsFirstGroup.includes(el)) {
//             totalCost += COST_FIRST_GROUP;
//         } else if (fruitsSecondGroup.includes(el)) {
//             totalCost += COST_SECOND_GROUP;
//         } else {
//             totalCost += COST_OTHER_GROUP;
//         }
//     })
//     const result = totalCost / arguments.length;
//     console.log('cost: ' + result+ ' $');
//     return result;
// };
// countCost('banana','cherry','lemon', 'pear','orange','raspberries');








    //  *********************  third variant  *********************
// const fruitsFirstGroup = ['apple', 'banana','orange','lemon'];
// const fruitsSecondGroup = ['pear','strawberry','cherry', 'melon'];
//
// const COST_FIRST_GROUP = 5;
// const COST_SECOND_GROUP = 7;
// const COST_OTHER_GROUP = 9;
//
// function countCost(...fruits){
//     let totalCost = 0;

//     const arr = fruits.map(function isContaineIngridient(el){
//         if (fruitsFirstGroup.includes(el)) {
//             return COST_FIRST_GROUP;
//         } else if (fruitsSecondGroup.includes(el)) {
//             return COST_SECOND_GROUP;
//         } else {
//             return COST_OTHER_GROUP;
//         }
//     })
//     const sum = arr.reduce(((sum, currentValue) => sum + currentValue));
//     const result = sum / arr.length;
//     console.log('cost: ' + result+ ' $');
//     return result;
// };
// countCost('banana','cherry','lemon', 'pear','orange','raspberries');




// *********************  fourth variant  *********************

// const FRUITS = [
//     {name: 'apple', cost: 5},
//     {name: 'banana', cost: 5},
//     {name: 'orange', cost: 5},
//     {name: 'lemon', cost: 5},
//     {name: 'strawberry', cost: 7},
//     {name: 'cherry', cost: 7},
//     {name: 'pear', cost: 7},
//     {name: 'melon', cost: 7}
// ]
// const OTHER_FRUITS_COST = 9;
// function countCost(...fruits) {
//
//     let sum = fruits.reduce((sum, currentValue) => {
//         const fruit = FRUITS.find(f => f.name === currentValue);
//
//         if (fruit) {
//             return sum +  fruit.cost;
//         }
//         return sum + OTHER_FRUITS_COST ;
//     }, 0);
//
//     const result = sum / fruits.length;
//     console.log('cost: ' + result+ ' $');
//     return result;
// }
// countCost('banana','cherry','lemon', 'pear','orange','raspberries');