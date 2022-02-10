let a = []
let n = 10

let sum1 = 0

for(let index  = 0 ; index<n;index++){
    a[index] = []
    let sum = 0
    for(let j = 0 ; j<n;j++){
        let randomNum = Math.round((Math.random()*40)-20)
        a[index][j] = randomNum
        if(a[index] === a[index]){
        sum+=a[index][j]
        }
    }
    if(sum<0){
        console.log(`${index}:[${a[index]}] = ${sum}`)
        delete a[index]
    }
 
}
console.log(a)