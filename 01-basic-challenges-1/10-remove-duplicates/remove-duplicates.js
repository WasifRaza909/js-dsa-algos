function removeDuplicates(arr) {
    // Sol 1
    // let charTrack = [];

    // newArr = arr.map(ar => {
    //     if(charTrack.includes(ar)){
    //         return
    //     } else [
    //         charTrack.push(ar)
    //     ]
    // })

    // return charTrack
    // Sol 2
    return Array.from(new Set(arr))
}

module.exports = removeDuplicates;
