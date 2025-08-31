function calculateTotalSalesWithTax(productsArray, taxPercentage) {
    const totalAmount = productsArray.reduce((acc, curr) => {
        // console.log(curr)
        const priceOfProduct = curr.price
        const quantityOfProduct = curr.quantity

        const totalPriceWithoutTax = priceOfProduct * quantityOfProduct
        acc += totalPriceWithoutTax

        return acc
    }, 0)

    const calculateTaxAmount = (totalAmount / 100) * taxPercentage

    const totalPriceWithTax = (calculateTaxAmount + totalAmount)

    return totalPriceWithTax
}

module.exports = calculateTotalSalesWithTax;
