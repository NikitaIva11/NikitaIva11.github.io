class charactrer {
     constructor(char) {
          this.char = char;

     }
     createChar() {
          document.body.innerHTML = this.char;
     }
     animWalk(character) {
          character.children[1].style.transform = 'translateY(-8px)rotate(5deg)'
          character.children[2].style.transform = 'translateY(-8px)rotate(-2deg)'
          character.children[7].style.transform = 'translateY(-7px)rotate(5deg)'
          character.children[8].style.transform = 'translateY(-7px)rotate(-2deg)'
          setTimeout(() => {
               character.children[1].style.transform = ''
               character.children[7].style.transform = ''
               character.children[2].style.transform = ''
               character.children[8].style.transform = ''
          }, 200)
     }
     charactrerMovement(character, thisClass, event) {
          const step = 50;

          let params = character.getBoundingClientRect();
          if (event.repeat) return;
          if (event.ctrlKey) event.preventDefault();
          switch (event.keyCode) {
               case 68: //d
                    character.style.left = params.left + step;
                    thisClass.animWalk(character);
                    break;
               case 65: //a
                    character.style.left = params.left - step;
                    thisClass.animWalk(character);
                    break;
               case 83: //s
                    if (event.ctrlKey) return;
                    character.style.top = params.top + step;
                    thisClass.animWalk(character);
                    break;
               case 87: //w
                    if (event.ctrlKey) return;
                    thisClass.animWalk(character);
                    character.style.top = params.top - step;
                    break;
               case 32: //space
                    if (event.ctrlKey) return;
                    character.classList.add('jump');
                    setTimeout(() => {
                         character.classList.remove('jump');
                    }, 500)
                    break;
               case 17: //ctrl
                    character.style.width = params.width - params.width * 0.15 + 'px';
                    character.style.height = params.height - params.height * 0.40 + 'px';
                    break;
               default:
                    break;
          }
     }
     standUp(character, event) {
          if (event.keyCode === 17) {
               character.style.width = '100px';
               character.style.height = '150px';
          }
     }
     main() {
          this.createChar();
          const character = document.querySelector('.character');
          window.addEventListener('keydown', this.movement = this.charactrerMovement.bind(null, character, this));
          window.addEventListener('keyup', this.stand = this.standUp.bind(null, character));
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
</svg>`)
charA.main()