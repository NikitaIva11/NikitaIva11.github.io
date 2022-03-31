data = {
     addRecord: function () {
          for(keys in arguments){
               if(typeof arguments[keys]==='object'&&!Array.isArray(arguments[keys])){
                    data = Object.assign(data,arguments[keys])
               }
          }
     },
     p: 600,
     str: 'hello',
     y: -50
}

data.addRecord('qwdqwd',{x:0},[1,2,3],{y:300000})
console.log(data)