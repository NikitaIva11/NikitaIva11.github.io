let data = {
     title: 'menu',
     type: 'row',
     items: [
          {
               title: 'title 1',
               handler: 'ActionAdd'
          },
          {
               title: 'title 2',
               handler: 'ActionSaveAs',
               items: [
                    {
                         title: 'inner 1', items: [
                              {
                                   title: 'inner 1',

                              }, { title: 'inner 2' }
                         ]

                    }, { title: 'inner 2' }
               ]
          },
          {
               title: 'title 3',
               handler: 'ActionExit'
          }
     ]
}
class componentDropDown {
     static renderItem(htmlName, className) {
          let item = '';
          if (htmlName) item = document.createElement(`${htmlName}`);
          if (className) item.classList.add(`${className}`);
          return item;
     }
     static renderMenu(data, target, type) {
          let ul = ''
          if (type === 'column') data.title === 'menu' ?
               ul = this.renderItem('ul', 'menu_column')
               :
               ul = this.renderItem('ul', 'submenu_column');
          else data.title === 'menu' ?
               ul = this.renderItem('ul', 'menu')
               :
               ul = this.renderItem('ul', 'submenu');

          data.items.forEach(el => {
               const li = this.renderItem('li', 'items');

               if (el.handler) li.setAttribute('data-func', el.handler);
               li.innerHTML = el.title;
               if (el.handler === 'ActionSaveAs') {
                    const inputWrapper = this.renderItem('div', 'input_wrapper');
                    const input = this.renderItem('input', 'input');
                    const button = this.renderItem('button', 'button');
                    button.setAttribute('data-create', 'create');
                    input.setAttribute('placeholder', 'Name li');
                    button.innerHTML = 'CREATE';
                    inputWrapper.appendChild(input);
                    inputWrapper.appendChild(button);
                    li.appendChild(inputWrapper);
               }
               ul.appendChild(li);
               if (el.items) this.renderMenu(el, li, type);
          });

          target.appendChild(ul);
     }
     static ActionAdd(thisClass,type,e) {
          if (e.target.children.length === 0) {
               const ul = thisClass.renderItem('ul');
               ul.classList.add(type === 'row' ? 'submenu' : 'submenu_column');
               e.target.appendChild(ul);
          }
          const li = thisClass.renderItem('li','items');
          li.innerHTML = `inner_${e.target.children[0].children.length}`;
          e.target.children[0].appendChild(li);
     }
     static ActionSaveAs(thisClass,type,e) {
          e.target.children[0].classList.toggle('display');
          const target = e.target;
          const input = document.querySelector('.input');
          const button = document.querySelector('.button');
          function add(e) {
               if (input.value != '') {
                    const li = thisClass.renderItem('li','items');
                    li.innerHTML = input.value;
                    input.value = ''
                    target.children[1].appendChild(li);
               }
          }
          button.addEventListener('click', add)
     }
     static ActionExit(thisClass,type,e) {
          const menu = document.querySelector(type === 'row' ? '.menu' : '.menu_column');
          menu.removeEventListener('click', thisClass.actions, false);
          menu.remove()
     }
     static actionsFunc( thisClass,type,e) {
          const actionList = {
               ActionAdd: thisClass.ActionAdd,
               ActionSaveAs: thisClass.ActionSaveAs,
               ActionExit: thisClass.ActionExit
          }
          const attr = e.target.getAttribute('data-func');
          if (attr) actionList[attr](thisClass,type,e);

     }
     static main(data, target, type) {
          this.renderMenu(data, target, type);
          const menu = document.querySelector(type === 'row' ? '.menu' : '.menu_column');
          menu.addEventListener('click',this.actions =  this.actionsFunc.bind(null,this,type));
     }
}
componentDropDown.main(data, document.body, data.type)