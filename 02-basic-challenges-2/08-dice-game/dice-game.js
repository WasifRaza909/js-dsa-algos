function diceGameSimulation(rollCount) {
    const arr = []

    for (let i = 1; i <= rollCount; i++) {
        const dice1 = Math.ceil(Math.random() * 6)
        const dice2 = Math.ceil(Math.random() * 6)
        const sumOfDice = dice1 + dice2;
        let result;

        switch (sumOfDice) {
            case 7:
            case 11:
                result = "win";
                break;
            case 2:
            case 3:
            case 12:
                result = "lose"
                break;
            default:
                result = 'roll again'
        }

        const obj = {dice1, dice2, sum: sumOfDice,result }
        arr.push(obj)
    }
    return arr;
}

module.exports = diceGameSimulation;
