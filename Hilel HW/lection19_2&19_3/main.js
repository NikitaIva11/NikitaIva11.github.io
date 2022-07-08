let actionList = {
     Jump: 'Jump',
     ChangeColor: 'ChangeColor',
     Remove: 'Remove',
};
class charactrer {
     constructor(char) {
          this.char = char;
     }
     createChar() {
          document.body.innerHTML = this.char;
     }
     animWalk() {
          this.character.children[1].style.transform = 'translateY(-8px)rotate(5deg)'
          this.character.children[2].style.transform = 'translateY(-8px)rotate(-2deg)'
          this.character.children[7].style.transform = 'translateY(-7px)rotate(5deg)'
          this.character.children[8].style.transform = 'translateY(-7px)rotate(-2deg)'
          setTimeout(() => {
               this.character.children[1].style.transform = ''
               this.character.children[7].style.transform = ''
               this.character.children[2].style.transform = ''
               this.character.children[8].style.transform = ''
          }, 200)
     }
     charactrerMovement(thisClass, event) {
          const step = 50;

          let params = thisClass.character.getBoundingClientRect();
          if (event.repeat) return;
          if (event.ctrlKey) event.preventDefault();
          switch (event.keyCode) {
               case 68: //d
                    thisClass.character.style.left = params.left + step;
                    thisClass.animWalk();
                    break;
               case 65: //a
                    thisClass.character.style.left = params.left - step;
                    thisClass.animWalk();
                    break;
               case 83: //s
                    if (event.ctrlKey) return;
                    thisClass.character.style.top = params.top + step;
                    thisClass.animWalk();
                    break;
               case 87: //w
                    if (event.ctrlKey) return;
                    thisClass.animWalk();
                    thisClass.character.style.top = params.top - step;
                    break;
               case 32: //space
                    if (event.ctrlKey) return;
                    thisClass.Jump(thisClass);
                    break;
               case 17: //ctrl
                    thisClass.character.style.width = params.width - params.width * 0.15 + 'px';
                    thisClass.character.style.height = params.height - params.height * 0.40 + 'px';
                    break;
               default:
                    break;
          }
     }
     standUp(thisClass, event) {
          if (event.keyCode === 17) {
               thisClass.character.style.width = '100px';
               thisClass.character.style.height = '150px';
          }
     }
     returnChar() {
          return this.character;
     }
     main() {
          this.createChar();
          this.character = document.querySelector('.character');
          window.addEventListener('keydown', this.movement = this.charactrerMovement.bind(null, this));
          window.addEventListener('keyup', this.stand = this.standUp.bind(null, this));
     }
     Remove() {
          window.removeEventListener('keydown', this.movement);
          window.addEventListener('keyup', this.stand);
          this.character.remove()
     }
     Jump(thisClass){
          thisClass.character.classList.add('jump');
          setTimeout(() => {
               thisClass.character.classList.remove('jump');
          }, 500)
     }
     ChangeColor(){
          const body = this.character.children[0];
          const legLeft = this.character.children[1];
          const legRight = this.character.children[2];
          let color = `rgba(${this.randomColor()},${this.randomColor()},${this.randomColor()})`;

          body.style.fill = color;
          legLeft.style.fill = color;
          legRight.style.fill = color;
     }
     randomColor(){
          let random = Math.random() * 275;
          return random;
     }

}
class contextComponent {
     constructor(actionList, char) {
          this.actionList = actionList;
          this.char = char;
          this.character = char.returnChar();
          this.localList = this.localCheck();
          this.windowHeight = window.innerHeight;
          this.windowWidth = window.innerWidth;
     }
     localCheck() {
          let localList = JSON.parse(localStorage.getItem('localList'));
          if (!localList) {
               localStorage.setItem('localList', JSON.stringify(this.actionList));
               localList = JSON.parse(localStorage.getItem('localList'));
          }
          return localList;
     }
     renderItem(htmlName, className, inner = null) {
          let item = '';
          if (htmlName) item = document.createElement(`${htmlName}`);
          if (className) item.classList.add(`${className}`);
          if (inner) item.innerHTML = `${inner}`;
          return item;
     }
     renderContext(target) {
          this.ul = this.renderItem('ul', 'main')
          for (let keys in this.localList) {
               const li = this.renderItem('li', 'main_item', `${keys}`);
               this.ul.appendChild(li);
          }
          target.appendChild(this.ul);
     }
     contextAction(thisClass, event) {
          event.preventDefault()
          let x = event.x;
          let y = event.y;
          let itemHeight = 250;
          let itemWidth = 150;
          thisClass.ul.style.left = `${x + 20}px`;
          thisClass.ul.style.top = `${y}px`;
          thisClass.ul.classList.add('display');
          thisClass.ul.classList.add('swipeMenu');
          setTimeout(() => {
               thisClass.ul.classList.remove('swipeMenu');
          }, 400)
          if (x >= thisClass.windowWidth - 200) {
               thisClass.ul.style.left = `${x - itemWidth - 20}px`;
               thisClass.ul.style.top = `${y}px`;

          }
          if (y >= thisClass.windowHeight - 250) {
               thisClass.ul.style.left = `${x + 20}px`;
               thisClass.ul.style.top = `${y - itemHeight}px`;
          }
          if (y >= thisClass.windowHeight - 250 && x >= thisClass.windowWidth - 200) {
               thisClass.ul.style.left = `${x - itemWidth - 20}px`;
               thisClass.ul.style.top = `${y - itemHeight}px`;
          }
     }
     closeContext(thisClass, event) {
          thisClass.ul.classList.remove('display')
     }
     contextFunc(thisClass, event) {
          event.stopPropagation()
          for (let keys in thisClass.localList) {
               if (keys === event.target.innerHTML) {
                    thisClass.char[keys](thisClass.char);
               }
          };
     }
     main() {
          this.renderContext(document.body);
          window.addEventListener('contextmenu', this.open = this.contextAction.bind(null, this));
          window.addEventListener('click', this.close = this.closeContext.bind(null, this));
          this.ul.addEventListener('click', this.contextClick = this.contextFunc.bind(null, this));
     }
}

let charA = new charactrer(`<svg class="character" width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect class="charBody" width="100" height="100" fill="#E22D2D"/>
<rect class="legs" x="14" y="100" width="13" height="50" fill="#E22D2D"/>
<rect class="legs" x="52" y="100" width="13" height="50" fill="#E22D2D"/>
<circle class="eye" cx="27.5" cy="27.5" r="12.5" fill="black"/>
<circle class="eye" cx="72.5" cy="27.5" r="12.5" fill="black"/>
<circle cx="32" cy="22" r="5" fill="white"/>
<circle cx="77" cy="22" r="5" fill="white"/>
<rect class="legs" x="14" y="140" width="20" height="10" fill="black"/>
<rect class="legs" x="52" y="140" width="20" height="10" fill="black"/>
</svg>`);
charA.main();
const context = new contextComponent(actionList, charA);
context.main();