function countVowels(str) {
    const vowels = 'aeiou'
    let vowelsCount = 0

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            vowelsCount++
        } 
    }

    return vowelsCount

}

module.exports = countVowels;
