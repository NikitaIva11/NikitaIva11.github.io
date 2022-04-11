const clear = document.querySelector('.clear')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const textarea = document.querySelector('textarea')
// 1.---------------------------------------------------------
setInterval(function () {
     textarea.value = `${one.value},${two.value},${three.value}`
}, 1000)
// 2.---------------------------------------------------------
clear.addEventListener('click', e => {
     document.body.querySelectorAll('*').forEach(el => {
          el.classList.toggle('unset')
     })
})