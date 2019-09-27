'use strict'

const reduce = (arr, func, initialValue = 0) => {
    let acc = initialValue
    for(let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i], i, arr)
    }
    console.log(acc)
    return acc
}

export default reduce