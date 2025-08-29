function findMaxNumber(arr) {
    let maxChar = arr[0]

    arr.map(ar => {
        if(maxChar < ar) {
            maxChar = ar
        }
    })

    return maxChar
}

module.exports = findMaxNumber;
