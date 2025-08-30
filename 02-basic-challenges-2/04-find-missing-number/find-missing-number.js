function findMissingNumber(arr) {
    const maxedNum = Math.max(...arr)
    let missingNum;
    for (let i = 0; i < maxedNum; i++){
        if(!arr.includes(i)){
            missingNum = i;
        }
    }

    return missingNum
}

module.exports = findMissingNumber;
