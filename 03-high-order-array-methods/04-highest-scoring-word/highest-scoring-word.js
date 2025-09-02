function highestScoringWord(str) {
    const strToArr = str.split(" ")

    let highestVal = 0
    let highestValWord;

    strToArr.map(str => {
        let strValue = 0;
        for (let i = 0; i < str.length; i++) {
            const getAlphabetValue = str.toLowerCase().charCodeAt(i) - 96

            strValue += getAlphabetValue
        }

        if (highestVal < strValue) {
            highestVal = strValue
            highestValWord = str
        }
    })

    return highestValWord
}

module.exports = highestScoringWord;
