export default (arr, func) => {

    for (let i = 0; i < arr.length; i++) if (func(arr[i], i)) return true
    return false
}
