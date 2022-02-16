const arr = [1, 2, 3, 4, 5, 6];
const n = arr.length;
function copy(arr, func) {
    let newArr = [];
    if (typeof func === 'function') {
        for (let i = 0; i < n; i++) { newArr.push(func(arr[i])); }
    } else {
        for (let i = 0; i < n; i++) { newArr.push(arr[i]); }
    }
    return newArr;
    //--------------------------------
    // Решение через map
    // if (typeof func === 'function') {
    //     newArr = arr.map(el => { return func(el) })
    // } else {
    //     newArr = arr.map(el => { return el })
    // }
    // return newArr
}
let newArr = copy(arr, function (value) { return value * 10 });
console.log(newArr);
console.log(arr);