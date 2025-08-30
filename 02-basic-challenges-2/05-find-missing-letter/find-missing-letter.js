function findMissingLetter(arr) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
    const startIndex = alphabets.indexOf(arr[0])
    const endIndex = alphabets.indexOf(arr[arr.length - 1])
    let missingAlphabet;

    for(let i = startIndex; i <= endIndex; i++){
        if(!arr.includes(alphabets[i])){
                missingAlphabet = alphabets[i]
        }
    }

    return missingAlphabet
}

module.exports = findMissingLetter;
