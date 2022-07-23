const wrapper = document.querySelector('.wrapper');
const toDo_title = document.querySelector('.toDo_title');
const toDo_wrapper = document.querySelector('.toDo-wrapper');
class fetchClass{
     static async post(url, data) {
          let send = await fetch(url, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json;charset=utf-8'
               },
               body: JSON.stringify(data)
          })
         let callBack = await send.json()
          return callBack;
     }
     static async get(url) {
          let resp = await fetch(url);
          let data = await resp.json();
          return data;
     }
}
class toDo {
     constructor() {
          this.data = this.checkProfile()
          this.init()
     }
     funcMaker = (event) => {
          let dataFunc = event.target.dataset.func;
          if (dataFunc) this[dataFunc].bind(this)(event);
          else return;
     }
     async checkProfile() {
          let ip = await fetchClass.get('https://api.ipify.org?format=json');
          let send = await fetchClass.post('http://localhost:3000/createProf', ip);
          if (send.data.length) this.render();
          return send;
     }
     async addToDo() {
          toDo_title.value.trim()
          if (toDo_title.value === '') return;
          let data = await this.data;
          let date = new Date()
          let toDoItem =
          {
               title: toDo_title.value,
               id: date.getTime(),
               date: `${date.toLocaleDateString()}/${date.getHours()}:${date.getMinutes()}`,
               checked: false
          }
          data.data.unshift(toDoItem)
          fetchClass.post('http://localhost:3000/pushToDo', data)
          this.render();
     }
     async delete(e) {
          let id = e.target.parentNode.parentNode.dataset.id;
          if (!id) return;
          let data = await this.data;
          data.data.forEach(el => {
               if (el.id == id) {
                    let index = data.data.indexOf(el)
                    data.data.splice(index, 1)
               }
          })
          e.target.parentNode.parentNode.remove();
          fetchClass.post('http://localhost:3000/pushToDo', data)
     }
     async checked(e) {
          let id = e.target.parentNode.parentNode.dataset.id;
          if (!id) return;
          let data = await this.data;
          data.data.forEach(el => {
               if (el.id == id) {
                    el.checked = !el.checked;
                    
               }
          })
          let good = data.data.sort(function(a,b){
               if(a.checked!=true){
                    return -1
               }else{
                    return 1
               }
          })
          fetchClass.post('http://localhost:3000/pushToDo', data)
          this.render()
     }
     showMenu(e){
          let inp_block = e.target.parentElement.parentElement.children[0].children[0];
          let title = e.target.parentElement.parentElement.children[0].children[1];
          ;
          title.classList.toggle('display')
          inp_block.classList.toggle('flex')
     
     }
     async edit(e){
          let id = e.target.parentElement.parentElement.parentElement.dataset.id;
          let inp = e.target.parentElement.children[0];
          let data = await this.data
          let date = new Date()
         data.data.forEach(el=>{
               if(id==el.id){
                    el.title = inp.value;
                    el.id = date.getTime(),
                    el.changedTime = `${date.toLocaleDateString()}/${date.getHours()}:${date.getMinutes()}`
               }
          })
          fetchClass.post('http://localhost:3000/pushToDo', data)
          this.render()
     
     }
     async render() {
          toDo_wrapper.innerHTML = ''
          let data = await this.data;
               data.data.forEach((el,index) => {
                    let check = el.checked && 'checked'
                    let changedTime = el.changedTime ? `<p class="edited_date">Edited:${el.changedTime}</p>`:''
                    let time = (index+1)
                    toDo_wrapper.innerHTML += `
                    <div style="animation: wrap ${time}s linear;" class="todo-item ${check}" data-id="${el.id}">
                    <div class="todo-item_title_block">
                    <div class="edit edit_block">
                    <input class="edit_input" type="text">
                    <button data-func="edit" class="edited">OK</button>
               </div>
               
                         <p class="title ${check}">${el.title} </p>
                         <p class="date">Create:${el.date}</p>
                         ${changedTime}
                    </div>
                    <div class="todo-item_settings_block">
                         <button data-func="checked" class="done ${check}"></button>
                         <button data-func="showMenu" class="edit_but"></button>
                         <button data-func="delete" class="delete"></button>
                    </div>
               </div> `
               });
 

     }
     init() {
          wrapper.addEventListener('click', this.func = this.funcMaker)
     }
}
let todo = new toDo()
