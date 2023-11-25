const array = [1, 2, 2, 3, 4, 4, 5, 1]

function removeDuplicates(array) {
    let rem = 0
    remArr = []
    for (var i = 1; i < array.length + 1; i++) {
        if(array[i] !== array[i-1]){
            rem = array[i-1]
            if(!remArr.includes(rem)) {
                remArr.push(rem)
                // console.log(rem)
            }
        }
    }
    return remArr
}

console.log(removeDuplicates(array))