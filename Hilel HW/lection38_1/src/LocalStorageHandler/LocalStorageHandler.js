class LocalStorageHandler{
     getList(){
          let list = JSON.parse(localStorage.getItem('list'));
          if(!list){
               localStorage.setItem('list',JSON.stringify([]))
               list = JSON.parse(localStorage.getItem('list'));
          }
          return list
     }
     postList(list,item){
          let newItem = [...list,{...item}];
          localStorage.setItem('list',JSON.stringify(newItem));
          newItem = JSON.parse(localStorage.getItem('list'));
          return newItem;
     }
     putList(item){
          localStorage.setItem('list',JSON.stringify(item));
          let newItem = JSON.parse(localStorage.getItem('list'));
          return newItem;
     }
}
export const LocalList = new LocalStorageHandler()