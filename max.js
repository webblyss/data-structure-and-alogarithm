

function findMax(arr){
    // [1,23,4,5,6]
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}



function findMin(arr){
    // [100,2,3,46,5]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    return min;
}




const list = [100,22,3,4]

console.log(findMin(list))


