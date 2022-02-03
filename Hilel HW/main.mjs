const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')
const burger = document.querySelector('.burger')
const ball = document.querySelector('.ball')
const side_bar = document.querySelector('.side_bar')
const student_info = document.querySelector('.student_info')
const homework = document.querySelector('.homework')
import lessons from './storage.mjs'

function include(url) {
    let script = document.createElement('script');
    // script.src = url;
    script.setAttribute('type','module')
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
    kek = script
    
}
function rout(href){
    lessons.forEach(el=>{
        if(href.includes(el.lessPath)&&href.includes('index.html')===false){
            el.lessPath = `.${el.lessPath}`
            console.log('lol')
        }
    })
}
rout(document.location.href)

burger.addEventListener('click',e=>{
    line1.classList.toggle('opacity')
    line2.classList.toggle('rotate45')
    line3.classList.toggle('rotate-45')
    line4.classList.toggle('opacity')
    side_bar.classList.toggle('left')
})
ball.addEventListener('click',e=>{
    student_info.classList.toggle('right')
})
lessons.forEach(el=>{
    let save = ''
side_bar.insertAdjacentHTML('beforeend',
    `        <div  class="hw_block">
    <div  cldivss="num_date_less">
        <h2 class="lessName">${el.lessName}</h2>
        <p class="lessDate">${el.lessDate}</p>
    </div>
</div>`
)
})
// ${document.location.href.includes(el.lessPath)?'../'+lessons.indexOf(el).lessPath+'/'+el.lessPath+'.html':'./'+el.lessPath+'/'+el.lessPath+'.html'}
// '../'+lessons[].lessPath+'/'+el.lessPath+'.html'
// let sek =  document.head.innerHTML
// const pip = document.body.lastChild
// console.log(pip.src)
const lessName = document.querySelectorAll('.hw_block')
let save = ''
lessName.forEach(el=>{
el.addEventListener('click',e=>{
    save=e.currentTarget.childNodes[1].childNodes[1].innerHTML
    console.log(save)
    lessons.forEach((el,i)=>{
        if(save===el.lessName){
            homework.innerHTML=el.lessCSS+el.lessHW
            el.lessPath()
        }
        
    })
})

})