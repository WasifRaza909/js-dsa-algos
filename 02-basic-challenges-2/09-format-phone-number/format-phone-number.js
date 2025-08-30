function formatPhoneNumber(arr) {
    const countryCode = arr.slice(0, 3)
    const middleNumber = arr.slice(3, 6)
    const lastNumber = arr.slice(6, arr.length)

    return `(${countryCode.join('')}) ${middleNumber.join('')}-${lastNumber.join('')}`
}

module.exports = formatPhoneNumber;
