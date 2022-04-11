const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const textarea = document.querySelector('textarea')
// 1.---------------------------------------------------------
setInterval(function () {
     textarea.value = `${one.value},${two.value},${three.value}`
}, 1000)
// 2.---------------------------------------------------------
document.body.querySelectorAll('*').forEach(el => {
     el.style.color = '0'
     el.style.backgroundColor = '0'
     el.style.width = '0'
     el.style.height = '0'
})
