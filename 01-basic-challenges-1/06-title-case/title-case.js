function titleCase(str) {
    const arr = str.split(' ')

    const newArr = arr.map(ar => {
        return ar[0].toUpperCase() + ar.slice(1)
    })

    return newArr.join(" ")
}

module.exports = titleCase;
