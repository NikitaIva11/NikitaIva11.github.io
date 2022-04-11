const clear = document.querySelector('.clear')
const one = document.querySelectorAll('.one')
const two = document.querySelectorAll('.two')
const three = document.querySelectorAll('.three')
const textarea = document.querySelector('textarea')
// 1.---------------------------------------------------------
setInterval(function () {
     textarea.value = one.value + two.value + three.value
}, 1000)
// 2.---------------------------------------------------------
clear.addEventListener('click', e => {
     document.body.querySelectorAll('*').forEach(el => {
          el.classList.toggle('unset')
     })
})