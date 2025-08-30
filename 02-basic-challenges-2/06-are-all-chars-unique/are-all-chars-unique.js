function areAllCharactersUnique(str) {
    // let duplicatesChar = [];
    let array = []
    // let char;

    for(let i = 0; i < str.length; i++){

        if(array.includes(str[i])){
            array = false;
            return array
        } else {
            array.push(str[i])
        }
  
    }

    return !!array
}

module.exports = areAllCharactersUnique;
