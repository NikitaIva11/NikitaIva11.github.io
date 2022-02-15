const list = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1];
const n = list.length;

function compress(list){
    const arr = [];
    let step = 0;
    for(let i = 0;i<n;i++){
        let current = list[i];
        let next = list[i+1];
        if(current!==next){
            arr.push((i+1)-step);
            step = i+1;
        }
    }
    return arr;
}
let newList = compress(list);
console.log(newList);
