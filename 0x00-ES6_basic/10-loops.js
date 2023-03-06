export default function appendToEachArrayValue(array, appendString) {
<<<<<<< HEAD
  const arr = [];
  for (const idx of array) {
    const value = idx;
    arr.push(appendString + value);
  }

  return arr;
}
=======
         for (const value of array) {
      
          array[array.indexOf(value)] = appendString + value;
    }
  
    return array;
  }
>>>>>>> 489b7fbf7bcebca55c1f8c3940a3f25fd1a2e049
