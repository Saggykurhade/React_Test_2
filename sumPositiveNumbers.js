const array = [1, -2, 3, 4, -5]

function sumPositiveNumbers(array) {
    let sum = 0
    for(var i = 0;i < array.length; i++) {
        if(array[i] > 0) {
            sum = sum + array[i]
        }
    }
    return sum
}

console.log(sumPositiveNumbers(array))