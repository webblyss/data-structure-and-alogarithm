
// REMOVE DUPLICATE FROM A LIST

function removeDuplicate(arr){
    let data = []
    for (let i = 0; i < arr.length; i++) {
        if (!data.includes(arr[i])) {
            data.push(i)
        }
        
    }
    return data;
}




const list = [1,2,3,4,4,4,5,6,1,2,4]


console.log(removeDuplicate(list))


