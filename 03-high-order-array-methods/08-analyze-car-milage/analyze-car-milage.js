function analyzeCarMileage(cars) {
    if(!cars || cars.length == 0 ){
        return "No Cars in Array"
    }

    const {totalMileage, highestMileageCar, lowestMileageCar} = cars.reduce((acc, car) => {
        acc.totalMileage += car.mileage;

        if(!acc.highestMileageCar || acc.highestMileageCar.mileage < car.mileage){
            acc.highestMileageCar = car
        }

        if(!acc.lowestMileageCar || acc.lowestMileageCar.mileage > car.mileage){
            acc.lowestMileageCar = car
        }

        return acc
    }, {totalMileage:0, highestMileageCar : null, lowestMileageCar : null})

    return ({
        averageMileage: totalMileage / cars.length,
        totalMileage,
        highestMileageCar,
        lowestMileageCar 
    })
}

module.exports = analyzeCarMileage;
