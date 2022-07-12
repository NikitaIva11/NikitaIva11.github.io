const but = document.querySelector('.send');
const inp = document.querySelector('.send_val');
const server_out = document.querySelector('.server_out');
const outer = document.querySelector('.outer');

but.addEventListener('click',send)
function send(){
     fetch(`http://localhost:7070/${inp.value}`).then(res=>res.json()).then(data=>{
          outer.innerHTML = '';
          for(let keys in data){
               outer.innerHTML += ` <span class="keys">${keys}<span class="value">:${data[keys]};</span></span>`
               
          }
          
     })
}