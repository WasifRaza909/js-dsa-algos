function validateEmail(email) {
    if(!email.startsWith("@") && email.includes("@") && email.includes(".") && !email.startsWith(".")){
        return true
    } else {
        return false
    }
}

module.exports = validateEmail;
