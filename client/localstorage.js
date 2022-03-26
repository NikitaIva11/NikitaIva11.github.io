const content = document.querySelector('.content')
const add = document.querySelector('.add')
const input = document.querySelector('.value')

if (!JSON.parse(localStorage.getItem('root'))) {
     localStorage.setItem('root', JSON.stringify({ value: 'root', parent: null, children: [] }))
}

let root = JSON.parse(localStorage.getItem('root'))

content.innerHTML = createVisual(root)
function traverse(root, callback) {
     if (!root.children) {
          return
     }
     if (callback) {
          callback(root)
     }
     for (let i = 0; i < root.children.length; i++) {
          traverse(root.children[i], callback)
     }
}
function addNode(value, parent, root) {
     let child = { value: value, parent: null, children: [] }
     let check = true
     traverse(root, function (node) {
          if (value === node.value) {
               check = false
               alert('Уже существует')
          }

     })
     if (check) {
          traverse(root, function (node) {
               if (parent === node.value) {
                    node.children.push(child)
                    child.parent = node
               }
          })
     }
}
const getCircularReplacer = () => {
     const seen = new WeakSet();
     return (key, value) => {
          if (typeof value === "object" && value !== null) {
               if (seen.has(value)) {
                    return;
               }
               seen.add(value);
          }
          return value;
     };
}
function inputCheck(value) {
     let valueExist = value === '' ? false : true
     let valueCheckInt = isNaN(parseInt(value.replace(/[\s.,%]/g, '')))
     let valueCheckChars = parseInt(value.replace(/[\s.,%]/g, '')).toString().length === value.replace(/[\s.,%]/g, '').length
     let valueCheckDote = value.replace(/[\s.,%]/g, '').length !== value.replace(/[0-9]/g, '').length
     let valueParent = (function (value) {
          let str = value.split('.')
          let arr = []
          for (let i = 0; i < str.length - 1; i++) {
               arr[i] = str[i]
          }
          arr = arr.join('.')
          return arr
     })(value)
     if (valueExist && !valueCheckInt && valueCheckChars && valueCheckDote) {
          if (value.split('.').length === 1) {
               addNode(value, 'root', root)
          } else {
               addNode(value, valueParent, root)
          }

     } else {
          alert('Неверные значения')
          return
     }
}
function createVisual(root) {
     if (root) {
          let arr = []
          let str = ''
          traverse(root, function (node) {
               arr.push(node.value)
          })
          arr.forEach(el => {
               return str += '<br>' + '-'.repeat(el.split('.').length) + el
          })
          return str
     }
}

add.addEventListener('click', e => {
     content.innerHTML = ''
     inputCheck(input.value)
     let take = createVisual(root)
     content.innerHTML = take
     localStorage.setItem('root', JSON.stringify(root, getCircularReplacer()))
     console.log(root)
     input.value = ''
})
