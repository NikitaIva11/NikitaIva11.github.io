const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')
const burger = document.querySelector('.burger')
const ball = document.querySelector('.ball')
const side_bar = document.querySelector('.side_bar')
const student_info = document.querySelector('.student_info')
const homework = document.querySelector('.homework')

let lessons = [
    {lessName:'Lection 1/Intro',lessDate:'Date: 24.01.2022',lessPath:`lection_1_Intro`,
    lessHW:`<div class="hw_item"><div class="hw_info">
        <div class="hw_name">
            <h1></h1>
            <p></p>
        </div>
        <div class="hw_link">

        </div>
    </div>
    <div class="hw_qustions">
        <h2>Задание:</h2>
        <br>
        <p>1.Написать программу рассчета обьема цилиндра, все данные (кроме числа PI) вводятся с клавиатуры руками. (число Пи в js выглядит так: Math.PI). Также нужно вывести информацию в таком виде:
            **************
            
            Обьем цилиндра с площадью основы *S* (вывети значение), радиусом *R* и высотой *H* равен:
            
            --------------------
            
            V = результат.
            
            -------------------
            
            end.
            
            P.S. Все звездочки и черточки нужно нарисовать. Вывод выполнять в документ (document.write())
        </p>
        <br>
        <p>
            2.Ввести с клавиатуры 3 переменные (a, b, c). Привести их все в число. Выполнить операцию суммирования всех переменных. Указать какие переменные являются чётными.
        </p>
    </div>
    <div class="hw_result">
        <div class="hw_result_item">
            <div class="num">
                <h1>1.V=S*h </h1>
            </div>
            <div class="result">
                <button class="start">START</button>
                <div class="qual first">
                    
                </div>
            </div>
        </div>
    </div>
    <div class="hw_result">
        <div class="hw_result_item">
            <div class="num">
                <h1>2. </h1>
            </div>
            <div class="result">
                <button class="start1">START</button>
                <div class="qual second">

                </div>
            </div>
        </div>
    </div>
</div>
    `},
]
function include(url) {
    let script = document.createElement('script');
    // script.src = url;
    script.setAttribute('type','module')
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
    kek = script
    
}
console.log(document.location.href.includes(lessons[0].lessPath))
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
    `        <a href='${document.location.href.includes(el.lessPath)?'./'+el.lessPath+'.html':'./'+el.lessPath+'/'+el.lessPath+'.html'}'  class="hw_block">
    <div  cldivss="num_date_less">
        <h2 class="lessName">${el.lessName}</h2>
        <p class="lessDate">${el.lessDate}</p>
    </div>
</a>`
)

})
// let sek =  document.head.innerHTML
// const pip = document.body.lastChild
// console.log(pip.src)
// const lessName = document.querySelectorAll('.lessName')
// lessName.forEach(el=>{
// el.addEventListener('click',e=>{
//     save=e.currentTarget.innerHTML
//     console.log(save)
//     lessons.forEach(el=>{
//         if(save===el.lessName){
//             homework.innerHTML=el.lessHW
            
            
//             // kek.remove()
//             // include(`${el.lessPath}`)
//             // include(`./${el.lessPath}/${el.lessPath}.js`)include(`./main.js`)
//             // include(`./main.js`)
            
//         }
//     })
// })
// })