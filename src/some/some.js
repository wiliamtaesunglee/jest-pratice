'use strict'
export default (arr, func) => {
    for(let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) return true
    }
    return false
}
