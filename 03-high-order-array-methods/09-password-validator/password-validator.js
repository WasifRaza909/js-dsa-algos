function validatePassword(string) {
    const strToArr = string.split('')

    if (string.length < 8) {
        return false
    }

    const hasUpperCaseLetter = strToArr.some(str => isNaN(str) && str == str.toUpperCase())
    
    if (!hasUpperCaseLetter) {
        return false
    }

    const hasLowerCaseLetter = strToArr.some(str => isNaN(str) && str == str.toLowerCase())

    if (!hasLowerCaseLetter) {
        return false
    }

    const hasDigit = strToArr.some(str => !isNaN(str))

    if (!hasDigit) {
        return false
    }

    return true
}

module.exports = validatePassword;
