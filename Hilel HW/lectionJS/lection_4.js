let a = []
let n = 10


for (let index = 0; index < n; index++) {
    a[index] = []
    for (let j = 0; j < n; j++) {
        let randomNum = Math.round((Math.random() * 40) - 20)
        a[index][j] = randomNum
    }
}
for (let index = 0; index < n; index++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum += a[j][index]
    }
    if (sum < 0) {
        console.log(index, sum)
        for (let z = 0; z < n; z++) {
            delete a[z][index]
        }
    }
}

console.log(a)
