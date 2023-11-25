const array= [ 1, 2, 3, 4, 5]

function reverseArray (array) {
    let position = []
    for (var i= array.length-1;i >= 0; i--) {
        position.push(array[i])
    }
    return position
}

console.log(reverseArray(array))