function fizzBuzzArray(number) {
    let arr = []
    // Sol 1
    for (let i = 1; i <= number; i++) {
//        switch (true) {
//   case i % 3 === 0 && i % 5 === 0:
//     arr.push("FizzBuzz");
//     break;
//   case i % 3 === 0:
//     arr.push("Fizz");
//     break;
//   case i % 5 === 0:
//     arr.push("Buzz");
//     break;
//   default:
//     arr.push(i);
// }
// SOl 2
        if(i % 3 == 0 && i % 5 == 0){
            arr.push("FizzBuzz")
        } else if(i % 3 == 0){
            arr.push("Fizz")
        } else if (i % 5 == 0){
                    arr.push("Buzz")
        } else {
            arr.push(i)
        }
    }
    return arr
}

module.exports = fizzBuzzArray;
