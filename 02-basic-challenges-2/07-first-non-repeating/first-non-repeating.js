function findFirstNonRepeatingCharacter(str) {
    let char = [];

    for(let i = 0; i < str.length; i++){
        if(char.includes(str[i])){
            const indexOfVal = char.indexOf(str[i])
            char.splice(indexOfVal, 1)
        } else {
            char.push(str[i])
        }
    }
    if(char.length > 0){
        return char[0]
    } else {
        return null
    }
}


module.exports = findFirstNonRepeatingCharacter;
