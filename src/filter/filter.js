'use strict'

const filter = (arr, func) => {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr) ? newArr.push(arr[i]) : null
        // if(func(arr[i])) {
        //     newArr.push(arr[i])
        // }
    }
    console.log(newArr)
    return newArr
}

export default filter