function countOccurrences(str, occ) {
    let count = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] == occ){
            count++
        }
    }

    return count
}

module.exports = countOccurrences;
