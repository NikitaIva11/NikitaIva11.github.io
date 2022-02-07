//? ---------------------------------------------------------------------------------------
// 1.Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. 
//   Например A = [23,1,2,52,5,34,23,6,246,436];
//   a)проверить все числа на простоту, и найденные простые числа сохранить в массив B.
//   b)найти максимальное число и минимальное число.
console.log('1.------------------')
// Решение:
let A = []
let primeArr = []
let n = 3
A.length = n
for(let index = 0; index < A.length; index++){
    let randomNum = Math.round(Math.random()*50)
    A[index] = randomNum
    let flag = true

    for(let j = 2; j < A[index] ; j++){
        if(A[index] % j === 0&&A[index]!=1){
            flag = false
            break;
        }
    }
    if(flag){
        primeArr.push(A[index])
    }
}

let maxNum = A[0]
let minNum = A[0]
for(let index = 1; index < A.length; index++){
if((A[index]>maxNum)){
    maxNum = A[index]
}
if(A[index]<minNum){
    minNum = A[index]   
}
}

console.log('Простые числа:' + primeArr)
console.log('MAX:' + maxNum)
console.log('MIN:' + minNum)
console.log('ALL:' + A)
//? ---------------------------------------------------------------------------------------
// 2.Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить
//    4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse(). 
//    Постарайтесь не использовать дополнительный массив. 
//    Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).
console.log('2.------------------')
// Решение:
for(let index = 0; index < Math.ceil(n / 2) ; index++){
    let last = A[(A.length-1)-index]
    let first = A[index]
    A[(A.length-1)-index] = first
    A[index] = last
}
console.log('Перевернутый массив:'+A)


// Другие возможные решения:
// 1)
// for(let index = 0; index < n; index++){A[((n-1)*2)-index] = A[index]}
// console.log(A.slice(n-1))

// 2)
// for(let index = 0; index < n; index++){A.unshift(A[index*2])}
// A.length = n
// console.log(A)


//? ---------------------------------------------------------------------------------------
// 3.Создать массивы А и В. Заполнить случайными числами.
//   Найди все элементы которые повторяются в массивах А и B.
console.log('3.------------------')
// Решение:
let C = []
let D = []
let length = 5
C.length,D.length = length

for(let index = 0;index < length;index++){
    let randomNum =  Math.round(Math.random()*10)
    let randomNum1 = Math.round(Math.random()*10)
    C[index] = randomNum
    D[index] = randomNum1
    let first = C[index-1]


    //Повторение элементов A в A и B в B
    for(let  j = index-C.length ;j < index; j++){
        if(C[index] === C[j]){
            console.log('Повторение элементов A в A:'+C[index])
        }
        if(D[index] === D[j]){
            console.log('Повторение элементов B в B:'+D[index])
        }
    }
    //Повторение элементов A в B
    for(let z = 0;z<length;z++){
        if(C[index]===D[z]){
            console.log('Повторение элементов A в B:'+C[index])
        }
    }
}

console.log('Массив A:' + C + '/Массив B:' + D)
//? ---------------------------------------------------------------------------------------
// 4.В одномерном массиве произвести такую замену: 
//   1 элемент поменять с 2, 3 элемент поменять с 4, 5 элемент поменять с 6 и тд.
//   Если длинна массива непарная - последний элемент не трогать.
//   Например: было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5
console.log('4.------------------')
// Решение:
console.log('Массив оригинальный:'+C)
for(let index = 0;index<Math.ceil(C.length / 2);index++){
    let first = C[index*2]
    let next = C[index*2+1]
    if(first===C[C.length-1]&&C.length%2!=0){
        break;
    }
    C[index*2+1] = first
    C[index*2] = next 


}


console.log('Массив с заменой:'+C)