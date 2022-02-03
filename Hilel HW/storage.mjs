import lection_1 from './lectionJS/lection_1_Intro.mjs'
import lection_2 from './lectionJS/lection_2.mjs'
let lessons = [
    {lessName:'Lection 1/Intro',
    lessDate:'Date: 24.01.2022',
    lessPath:`/lection_1_Intro/lection_1_Intro.html`,
    lessCSS:'<link rel="stylesheet" href="./lectionCSS/lection_1_Intro.css">',
    lessPath:lection_1,
    lessHW:`<div class="hw_item"><div class="hw_info">
    <div class="hw_name">
        <h1>Lection1/intro</h1>
        <p>Date:24.01.2022</p>
    </div>
    <div class="hw_link">
        <h2>Link:</h2>
        <a href="https://github.com/NikitaIva11/NikitaIva11.github.io/blob/main/Hilel%20HW/lection_1_Intro/lection_1_Intro.js">
            <img src="../github.png" alt="">
        </a>
        
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
    {lessName:'Lection 2/if-else,cycles',
    lessDate:'Date: 27.01.2022',
    lessCSS:'<link rel="stylesheet" href="./lectionCSS/lection_2.css">',
    lessPath:lection_2,
    lessHW:`
    <div id="homework" class="homework">
    <div class="hw_item">            
    <div class="hw_info">
    <div class="hw_name">
        <h1>Lection2/if-else,cycles</h1>
        <p>Date:27.01.2022</p>
    </div>
    <div class="hw_link">
        <h2>Link:</h2>
        <a href="https://github.com/NikitaIva11/NikitaIva11.github.io/blob/main/Hilel%20HW/lection_1_Intro/lection_1_Intro.js">
            <img src="../github.png" alt="">
        </a>
        
    </div>
</div>
<div class="hw_qustions">
    <h2>Задание:</h2>
    <br>
    <p>1. Ввести с клавиатуры 2 числа 'a' и 'b' (где 'a <<< b'. Символ "<<<" - означает "сильно меньше" ). Запустить цикл перебора от 'a' до 'b'. Вывести в консоль квадраты чётных чисел.
        <br>


        2. Заставить пользователя ввести с клавиатуры число (не строку и не NaN).
        <br>
        
        
        3. Проверить число на простоту. Число вводить с клавиатуры.
        <br>
        
        
        4. Посчитать сумму простых чисел от 0 до 250.
    </p>
</div>
<div class="hw_result">
    <div class="hw_result_item">
        <div class="num">
            <h1>1 и 2. </h1>
        </div>
        <div class="result">
            <div class="start_wrapper">
                <button class="start">START</button>
            </div>
            <h2>перебор всех чисел:</h2>
                <div class="all">

                </div>
            <h2>перебор четных чисел в квадрате:</h2>
                <div class="pow">

                </div>
        </div>
    </div>
    <div class="hw_result">
    <div class="hw_result_item">
        <div class="num">
            <h1>P.S. более глубокая проверка на строку: </h1>
        </div>
        <div class="result">
            <div class="start_wrapper">
                <button class="start">START</button>
            </div>
                <div class="all">

                </div>
        </div>
    </div>
    <div class="hw_result_item">
        <div class="num">
            <h1>3. </h1>
        </div>
        <div class="result">
            <div class="start_wrapper">
                <button class="start">START</button>
            </div>
                <div class="all">

                </div>
        </div>
    </div>
    <div class="hw_result_item">
        <div class="num">
            <h1>4. </h1>
        </div>
        <div class="result">
            <div class="start_wrapper">
                <button class="start">START</button>
            </div>
            <h2>Все простые числа:</h2>
                <div class="all">

                </div>
                <h2>Сумма всеъ простых чисел:</h2>
                <div class="pow">

                </div>
        </div>
    </div>
</div>
</div>
</div>`},
]

export default lessons