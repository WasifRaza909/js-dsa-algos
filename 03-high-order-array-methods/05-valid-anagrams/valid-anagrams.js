function validAnagrams(str1, str2) {
    const arrayStr1 = str1.split('').sort().join('')
    const arrayStr2 = str2.split('').sort().join('')
            
    return arrayStr1 == arrayStr2
}

module.exports = validAnagrams;
