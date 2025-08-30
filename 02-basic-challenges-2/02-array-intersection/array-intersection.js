function arrayIntersection(arr1, arr2) {
    const intersectedArr = []

    for(let i = 0; i < arr1.length; i++){
            if(arr2.includes(arr1[i]) && !intersectedArr.includes(arr1[i])){
               intersectedArr.push(arr1[i])
            }
    }

    return intersectedArr;
}

module.exports = arrayIntersection;
