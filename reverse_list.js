
// HOW TO REVERSE THE LIST 

function reverseList(arr){
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // Swap elements at start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    
        // Move start and end indices towards the middle
        start++;
        end--;
      }
    
      return arr;
}


const num = [1,2,3,4,5,6,7,8,9]

console.log(reverseList(num))










