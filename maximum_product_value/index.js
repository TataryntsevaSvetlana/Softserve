/*
You are given a certain integer, n, n > 0.
You have to search the partition or partitions, of n, with maximum product value.
Let'see the case for n = 8.

Partition                 Product
[8]                          8
[7, 1]                       7
[6, 2]                      12
[6, 1, 1]                    6
[5, 3]                      15
[5, 2, 1]                   10
[5, 1, 1, 1]                 5
[4, 4]                      16
[4, 3, 1]                   12
[4, 2, 2]                   16
[4, 2, 1, 1]                 8
[4, 1, 1, 1, 1]              4
[3, 3, 2]                   18 <---partition with maximum product value
[3, 3, 1, 1]                 9
[3, 2, 2, 1]                12
[3, 2, 1, 1, 1]              6
[3, 1, 1, 1, 1, 1]           3
[2, 2, 2, 2]                16
[2, 2, 2, 1, 1]              8
[2, 2, 1, 1, 1, 1]           4
[2, 1, 1, 1, 1, 1, 1]        2
[1, 1, 1, 1, 1, 1, 1, 1]     1
So our needed function will work in that way 

findPartMaxProd(8) --> [[3, 3, 2], 18]
If there are more than one partition with maximum product value,
the function should output the patitions in a length sorted way.
findPartMaxProd(10) --> [[4, 3, 3], [3, 3, 2, 2], 36]
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



function arrSum(arr){
    return arr.reduce((acc, el)=> acc + el);
  }
  
  const arr = [2, 5, 6, 11, 3],
        arr2 = [1, 5, 3, 2, 5],
        arr3 = [1, 3, 4, 6, 8],
        sum = -2;
  
  
  console.log(arrSum(arr));
  
  function calcu(index, ...arr){
    let arrMinus = [...arr],
        sumPlus = arrSum(arr),
        sumMinus = 0;
    
    arrMinus[index] *= -1; 
    sumMinus = arrSum(arrMinus);
    
    if(sumPlus == sum || sumMinus == sum){
      return true;
    }
    
    return (++index == arr.length) ? false : calcu(index, ...arr) || calcu(index, ...arrMinus);
     
  }
  