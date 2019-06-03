function indexOfMethod(inputString, searchElement, position = 0) {
    let result = -1;
    for (let i = position; i < inputString.length; i++) {
      let matchedTimes = 0;
      if (inputString[i] === searchElement[0]) {
        result = i;
        matchedTimes++;
  
        if (searchElement.length === 1 && result !== -1) {
          return result;
        }
  
        for (let j = 1; j < searchElement.length; j++) {
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
  

  indexOfMethod('слоненок слоня серенький', 'й');
