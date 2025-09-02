function findMissingLetter(array) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const getIndexOfFirstAlphabet = alphabets.indexOf(array[0])
    const getIndexOflastAlphabet = alphabets.indexOf(array[array.length - 1])
    
    const sliceAlphabets = alphabets.slice(getIndexOfFirstAlphabet, getIndexOflastAlphabet + 1).split('')

    const missingAlphabet = sliceAlphabets.find(ar => !array.includes(ar))

    return missingAlphabet
}

module.exports = findMissingLetter;
