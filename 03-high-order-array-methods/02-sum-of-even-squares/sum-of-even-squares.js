function sumOfEvenSquares(arr) {
    const getAllEvenNumbers = arr.filter(ar => ar % 2 == 0)
        const sumOfSquaredNumber = getAllEvenNumbers.reduce((acc, curr) => {
            const squareOfNumber = curr * curr

            acc += squareOfNumber
            return acc
        },0)

        return sumOfSquaredNumber

}

module.exports = sumOfEvenSquares;
