const start = document.querySelector('.start')
const start1 = document.querySelector('.start1')
const qual = document.querySelector('.first')
const qual1 = document.querySelector('.second')

const mind = start.addEventListener('click',e=>{
    let S = prompt('Введите площадь основания цилиндра:')
    let r = prompt('Введите радиус основания:')
    let h = prompt('Введите высоту цилиндра:')
    let p = Math.PI //Число pi
    let V = 0
    if(S===''&&h===''&&r===''){
        alert('Вы не ввели ключевые данные:')
    } else if(h===''){
        alert('Вы не ввели высоту,поэтому мы не можем рассчитать:')
    }else if(h!=''&&S!=''){
        V=S*h 
        r=p * h
        r=V / r
        r=Math.sqrt(r)
    }else if(h!=''&&r!=''){
        V=p * Math.pow(r,2) * h 
        S=V/h
    }
    qual.innerHTML=`
    <p>
    **************
    <br/> 
    Обьем цилиндра с площадью основы ${S}, радиусом ${r} и высотой ${h} равен: 
    <br/> 
    --------------------
    <br/> 
    V = ${V}. 
    <br/> 
    ------------------- 
    <br/> 
    end
    </p>`
})

// let V = 0  Объем
// let S = 0  Площадь
// let h = 0  Высота цилиндра
// let r = 0  радиус цилиндра


// V=p * Math.pow(r,2) * h  Формула объема цилиндра через радиус и высоту
// V=S*h  Формула объема цилиндра через площадь основания и высоту
// r=Math.sqrt(V/p* h ,2)

start1.addEventListener('click',e=>{
    let a = prompt('Введите первое число:')
    let b = prompt('Введите второе число:')
    let c = prompt('Введите третье число:')
    let arr = []
    arr.push(a,b,c)
    arr.forEach((el,i)=>{
        if(el%2===0){
            qual1.innerHTML = ` ${el},${qual1.innerHTML} `
        }
    })
})