function lastIndexOfMethod(inputString, searchElement, position = 0) {
  let result = -1;

  for (let i = inputString.length - 1 - position; i >= 0; i--) {
    let matchedTimes = 0;
    
    if (inputString[i] === searchElement[0]) {
      result = i;
      matchedTimes++;

      if (matchedTimes === searchElement.length && result !== -1) {
        return result;
      }

      for (let j = searchElement.length - 1; j >= 1; j--) {
        if (inputString[i + j] === searchElement[j]) {
          matchedTimes++;
        }


        if (matchedTimes === searchElement.length) {
          return result;
        }
      }

      matchedTimes = 0;
      result = -1;
    }
  }
  return result;
}

lastIndexOfMethod('слоненок слоня серенький слоня', 'слоня');