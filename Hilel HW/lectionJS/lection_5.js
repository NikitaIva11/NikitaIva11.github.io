const a = [60, 'qwdqwdqw', 70, 'wqdqwdqw', 80, 90, 100, 'qwdqwdqwd', 213];
const b = ['wqdqwdq', 10, 'qwdqwdqw', 20, 30, 40, 70, 200];
function sum(a, b) {
    // Проверка аргументов функции
    if (!Array.isArray(a) || !Array.isArray(b) || arguments.length > 2) {
        return 'Не массивы'
    }
    let sumA = 0;
    let sumB = 0;
    //Решение через concat
    let checkArr = a.concat(...b);
    for (let i = 0; i < checkArr.length; i++) {
        if (typeof checkArr[i] === 'number' && checkArr[i] != NaN && i <= checkArr.length - 1 - b.length) {
            sumA += checkArr[i];
        } else if (typeof checkArr[i] === 'number' && checkArr[i] != NaN && i <= checkArr.length - 1) {
            sumB += checkArr[i];
        }
    }
    //Решение через массив аргументов
    // for (let i = 0; i < arguments.length; i++) {
    //     for (let j = 0; j < arguments[i].length; j++) {
    //         if (typeof arguments[i][j] === 'number' && arguments[i][j] != NaN && i === 0) {
    //             sumA += arguments[i][j];
    //         } else if (typeof arguments[i][j] === 'number' && arguments[i][j] != NaN && i === 1) {
    //             sumB += arguments[i][j];
    //         }
    //     }
    // }
    return sumA > sumB ? a : b;
}
let bigArr = sum(a, b);
console.log(bigArr);