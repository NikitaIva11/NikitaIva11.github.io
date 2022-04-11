// 1.-------------------------------------------------------
class superArray {
     #makeArr(n, m, obj) {
          let mainArr = []
          let { min, max } = obj
          for (let i = 0; i < n; i++) {
               let innerArr = []
               for (let j = 0; j < m; j++) {
                    innerArr[j] = Math.floor((Math.random() * (max - min + 1)) + min)
               }
               mainArr[i] = innerArr
          }
          return mainArr
     }
     constructor(n, m, obj) {
          this.mainArr = this.#makeArr(n, m, obj)
     }
     // 2.-------------------------------------------------------
     render(separator) {
          let write = this.mainArr.map((el, index) => (index + 1) + ': ' + el.join(separator))
          write.forEach(el => {
               document.write(el + '<br>')
          })
     }
     // 3.-------------------------------------------------------
     clear(direaction, k) {
          if (direaction !== 'row' && direaction !== 'column') {
               return 'неверное значение';
          }
          if (k > this.mainArr.length || k > this.mainArr[0].length) {
               return 'неверная длина';
          }
          k = k - 1
          let cleaArr = this.mainArr.map(el => el)
          direaction === 'row' ? cleaArr[k].forEach((el, i) => cleaArr[k][i] = 0) : cleaArr.forEach(el => el[k] = 0)
          return cleaArr
     }
     // 4.-------------------------------------------------------
     setMarker(cords) {
          let { x, y } = cords
          if (y > this.mainArr.length || x > this.mainArr[0].length) {
               return 'неверная длина';
          }
          let cleaArr = this.mainArr.map(el => el)
          cleaArr[y - 1][x - 1] = '&'
          return cleaArr;
     }
     // 5.-------------------------------------------------------
     goTo(cords) {
          let { x, y } = cords
          if (y > this.mainArr.length || x > this.mainArr[0].length) {
               return 'неверная длина';
          }
          let cleaArr = this.mainArr.map(el => el)
          return cleaArr[y - 1][x - 1]
     }
     // 7.-------------------------------------------------------
     shift(direaction) {
          let x = 0
          let y = 0
          let row = this.mainArr[0].length - 1
          let column = this.mainArr.length - 1
          direaction.forEach(el => {
               switch (el) {
                    case 'top':
                         y += 1
                         break;
                    case 'right':
                         x = row -= 1
                         break;
                    case 'bottom':
                         y = column -= 1
                         break;
                    case 'left':
                         x += 1
                         break;
               }
          })
          return this.mainArr[y][x]
     }
}

let arrInstance = new superArray(5, 5, { min: 5, max: 10 })
arrInstance.render("_")
console.log(arrInstance.clear('row', 2))
console.log(arrInstance.setMarker({ x: 2, y: 3 }))
console.log(arrInstance.goTo({ x: 4, y: 3 }))
console.log(arrInstance.shift(['top', 'top', 'top', 'right']))
