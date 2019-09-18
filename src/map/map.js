'use strict'

export default (arr = [], func) => {

    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr))
    }
    return newArr
}
 