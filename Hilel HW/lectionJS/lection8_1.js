function findMaxInt(arr) {
     if(!arr||!Array.isArray(arr)){
          return;
     };
     let bigIntArr = [];
     let bigIntStr = ''
     inside()
     function inside() {
          arr.forEach(el => {
               let first = el[0];
               for(let i = 0;i<el.length;i++){
                    if(el[i]>first){
                         first=el[i]
                    }
               }
               // Через строку с добавлением запятой
               // bifIntStr+=first+',';
               // Через новый массив и метод join
               bigIntArr.push(first);
               bigIntStr  = bigIntArr.join(',');
          });
     };
     return bigIntStr;
}

let newArr = findMaxInt([[1, 2, 3, 5], [1, 7, 2, 3, 4, 5, 6]])
console.log(newArr)