class ComponentsFunc{
     constructor(target,selectId,inputValue){
          this.target = target;
          this.selectId = selectId;
          this.inputValue = inputValue;
          this.localCounters = JSON.parse(localStorage.getItem('counters'));
          this.target.addEventListener('click',this.action = this.findFunc.bind(null,this));
     }
     findFunc(thisClass,event){
          const attr = event.target.getAttribute('data-func');
          if(!attr)return;
          thisClass[attr](thisClass,event)
     }
     componentCount(thisClass,event){
          let attr = event.target.id;
          thisClass.localCounters[attr].int++;
          event.target.innerHTML = thisClass.localCounters[attr].int;
          if(thisClass.localCounters[attr].int<=50){
               thisClass.localCounters[attr].color = thisClass.randomColor(thisClass.randNum);
               event.target.style.backgroundColor = thisClass.localCounters[attr].color
          }else{
               thisClass.localCounters[attr].color = 'rgba(256,256,256)';
               event.target.style.backgroundColor = thisClass.localCounters[attr].color
               event.target.style.color = 'black'
          }
          let local = JSON.parse(localStorage.getItem('counters'));
          local = thisClass.localCounters;
          localStorage.setItem('counters', JSON.stringify(local));
     }
     clearCounters(thisClass,event){
          Object.keys(thisClass.localCounters).forEach(el=>{
               thisClass.localCounters[el].int = 1;
               thisClass.localCounters[el].color = null;
          })
          let arr = Array(...thisClass.target.children[1].children);
          arr.map(el =>{
               el.innerHTML = 1;
               el.style.backgroundColor = '';
          } )
          let local = JSON.parse(localStorage.getItem('counters'));
          local = thisClass.localCounters;
          localStorage.setItem('counters', JSON.stringify(local));
     }
     setCounter(thisClass,event){
          thisClass.localCounters[thisClass.selectId.value].int = thisClass.inputValue.value;
          let item = document.querySelector(`#${thisClass.selectId.value}`);
          item.innerHTML = thisClass.inputValue.value
          thisClass.inputValue.value = ''
          if(thisClass.localCounters[thisClass.selectId.value].int<=50){
               thisClass.localCounters[thisClass.selectId.value].color = thisClass.randomColor(thisClass.randNum);
               item.style.backgroundColor = thisClass.localCounters[thisClass.selectId.value].color
          }else{
               thisClass.localCounters[thisClass.selectId.value].color = 'rgba(256,256,256)';
               item.style.backgroundColor = thisClass.localCounters[thisClass.selectId.value].color
               item.style.color = 'black'
          }
          let local = JSON.parse(localStorage.getItem('counters'));
          local = thisClass.localCounters;
          localStorage.setItem('counters', JSON.stringify(local));
     }
     randNum(){
          let random = Math.floor(Math.random()*256);
          return random;
     }
     randomColor(randNum){
          let str = `rgba(${randNum()},${randNum()},${randNum()})`
          return str;
     }
     static renderItem(nameHtml, className, inner) {
          // console.log(inner)
          let item = '';
          if (nameHtml) item = document.createElement(`${nameHtml}`);
          if (className) item.classList.add(`${className}`);
          if (inner) item.innerHTML = `${inner}`;
          return item;
     }
}
class CountersComponent {
     constructor(target,local) {
          this.target = target;
          this.counter = ComponentsFunc.renderItem('div', 'counter');
          this.target.appendChild(this.counter);
          this.id = Array(...this.target.children).indexOf(this.counter) + 1;
          this.counter.id = `counter${this.id}`;
          this.counter.setAttribute('data-func', `componentCount`);
          this.attr = this.counter.id;
          this.localCounters = local.localList(this.attr);
          this.counter.innerHTML = this.localCounters.int;
          this.counter.style.backgroundColor = this.localCounters.color;
     }

}
class SettingsPanel{
     constructor(target,arrChild){
          this.target = target;
          this.button = ComponentsFunc.renderItem('button','clearCounters','CLEAR ALL');
          this.selectId = ComponentsFunc.renderItem('select','counter_id');
          this.inputValue = ComponentsFunc.renderItem('input','counter_value');
          this.addButton = ComponentsFunc.renderItem('button','setCounter_value','ADD');
          arrChild.forEach(el=>{
               this.selectId.innerHTML+=`<option>${el}</option>`
          })
          this.button.setAttribute('data-func','clearCounters');
          this.inputValue.placeholder = '=20'
          this.inputValue.type = 'number';
          this.addButton.setAttribute('data-func','setCounter');

          target.appendChild(this.button);
          target.appendChild(this.selectId);
          target.appendChild(this.inputValue);
          target.appendChild(this.addButton);
     }
}
class localConfig{
     static localList(attr) {
          let local = JSON.parse(localStorage.getItem('counters'));
          if (!local) {
               let obj = {}
               obj[attr] = { int: 1, color: null }
               localStorage.setItem('counters', JSON.stringify(obj));
               local = JSON.parse(localStorage.getItem('counters'));
          } if (!local[attr]) {
               local[attr] = { int: 1, color: null };
               localStorage.setItem('counters', JSON.stringify(local));
               local = JSON.parse(localStorage.getItem('counters'));
          }
          return local[attr];
     }
     static clearCash(target) {
          let arr = Array(...target.children)
          let local = JSON.parse(localStorage.getItem('counters'));
          let arrAttr = arr.map(el=> el.id)
          if (arr.length != Object.keys(local).length) {
                    for (let keys in local) {
                         if (!arrAttr.includes(keys)) {
                              console.log(keys)
                              delete local[keys];
                         }
                    }
               localStorage.setItem('counters', JSON.stringify(local));
               local = JSON.parse(localStorage.getItem('counters'));
          }
     }
}

const wrapper = document.querySelector('.wrapper');
const settings_panel = document.querySelector('.settings_panel');
const wrapper_counter = document.querySelector('.wrapper_counter');

const counterOne = new CountersComponent(wrapper_counter,localConfig);
const counterTwo = new CountersComponent(wrapper_counter,localConfig);
const settingsPanel = new SettingsPanel(settings_panel,Array(...wrapper_counter.children).map(el=>el.id));
const funcEvent = new ComponentsFunc(wrapper,settingsPanel.selectId,settingsPanel.inputValue);
localConfig.clearCash(wrapper_counter);
