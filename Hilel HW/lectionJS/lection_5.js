const a = [60,'qwdqwdqw',70,'wqdqwdqw',80,90,100];
const b = ['wqdqwdq',10,'qwdqwdqw',20,30,40,50];
function sum(a,b){
    let sumA = 0;
    let sumB = 0;
    for(let i = 0;i<a.length;i++){
        if(typeof a[i] === 'number'&&a[i]!=NaN){
            sumA+=a[i];
        }
        if(typeof b[i] === 'number'&&b[i]!=NaN){
            sumB+=b[i];
        }
    }
    let findArr = sumA>sumB?a:b;
    return findArr
}
let bigArr = sum(a,b);
console.log(bigArr);
