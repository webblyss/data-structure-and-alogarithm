function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;  // Returns the index if found
      }
    }
    return -1;  // Returns -1 if not found
  }
  
  let numbers = ['dog','game','james','apple'];
  console.log(linearSearch(numbers, 'dog'));  // Output: 2
  