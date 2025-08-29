function removeDuplicates(arr) {
    // let charTrack = [];

    // newArr = arr.map(ar => {
    //     if(charTrack.includes(ar)){
    //         return
    //     } else [
    //         charTrack.push(ar)
    //     ]
    // })

    // return charTrack
    return Array.from(new Set(arr))
}

module.exports = removeDuplicates;
