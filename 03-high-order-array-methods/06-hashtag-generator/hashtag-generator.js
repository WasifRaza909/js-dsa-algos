function generateHashtag(string) {
    if(string.length > 140 || string.length == 0){
        return false
    }

    const arrayFromStr = string.split(' ').map(str => {
        
        const breakStr = str.slice(1)
        
        const firstChar = str.charAt(0).toUpperCase()

        // console.log(firstChar, breakStr)

        return `${firstChar}${breakStr}`
    })

    const joinArry = arrayFromStr.join("")
    
    return `#${joinArry}`

}

module.exports = generateHashtag;
