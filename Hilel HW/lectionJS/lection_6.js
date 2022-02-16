const arr = [1, 2, 3, 4, 5, 6];
const n = arr.length;

function copy(arr, func) {
    let newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i]);
            func!=undefined?
            console.log(func(newArr[i]))
            :
            console.log(undefined);
        }
    return newArr;
    //--------------------------------
    // Решение через map
    // let newArr = arr.map(el => {
    //     func(el)
    //     return el
    // })
}
let newArr = copy(arr, function (value) { return value * 10 })
console.log(newArr)

