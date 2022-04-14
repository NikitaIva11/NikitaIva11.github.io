let burger = document.querySelector('.burger')
let line_wrap = document.querySelector('.line_wrap')
let links = document.querySelector('.links')
let active_burger = document.querySelector('.active_burger')

burger.addEventListener('click',e=>{
     line_wrap.classList.toggle('active_burger')
     links.classList.toggle('active_link')

})