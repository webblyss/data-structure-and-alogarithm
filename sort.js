function sort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  let numbers = [5, 3, 8, 4, 2];
  sort(numbers);
  console.log(numbers);  // Output: [2, 3, 4, 5, 8]
  