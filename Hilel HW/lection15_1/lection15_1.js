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
     el.style.color = 'initial'
     el.style.backgroundColor = 'initial'
     el.style.width = 'initial'
     el.style.height = 'initial'
})
