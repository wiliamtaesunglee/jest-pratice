'use strict'

const reverse = (arr) => {
    console.log(arr)
    let newArr = []
    for(let i = arr.length; i--;) {
        newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr
}

export default reverse