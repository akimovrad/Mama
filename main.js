const fl = document.querySelectorAll('.floating__nav a')

const removeActiveClass = () =>{
    fl.forEach(nav =>{
        nav.classList.remove('active')
    })
}

fl.forEach(nav =>{
    nav.addEventListener('click' , () =>{
        removeActiveClass();
        nav.classList.add('active')
    })
})




const res = document.querySelector('.resume__right');
const text = `<h4>Опыт</h4>
            <p>4 года опыта в графическом и веб-дизайне, создаю дизайн, который работает на ваш успех.</p>
            <ul>
                <li>
                    <h6>2020-2025</h6>
                    <h5>Граф. дизайн</h5>
                    <p>С 7 класса начил обучаться в дизайне.</p>
                </li>

                <li>
                    <h6>2021-2022</h6>
                    <h5>Заказы</h5>
                    <p>Через год после начала обучения у меня уже появились первые заказы на дизайн. </p>
                </li>

                <li>
                    <h6>2023-2024</h6>
                    <h5>Коммерческие проекты</h5>
                    <p>С 2023 года работаю над коммерческими проектами, создавая дизайн для бизнеса и брендов.</p>
                </li>

                <li>
                    <h6>2024-2025</h6>
                    <h5>Front-end</h5>
                    <p>А в 2024 году учусь в "Geeks" на front-end разрабочика.</p>
                </li>
            </ul>`


const ex = document.querySelector('.exper__btn');
ex.addEventListener('click' , () =>{
    res.innerHTML = text;
    res.className = 'resume__right'
    ex.classList.add('primary')

    ab.classList.remove('primary')
    sk.classList.remove('primary')
    edu.classList.remove('primary')
})
res.innerHTML = text;



const edu = document.querySelector('.edu__btn');
const texte = `<h4>Образование</h4>
            <p></p>
            <ul>
                <li>
                    <h6>2014-2019</h6>
                    <h5>Sapat</h5>
                    <p>Когда мне исполнилось 7 лет я пошел в школу "Sapat".</p>
                </li>

                <li>
                    <h6>2019-2020</h6>
                    <h5>Макаренко</h5>
                    <p>В 2019 году я перешол в школу "Макаренко" во время Covid-19.</p>
                </li>

                <li>
                    <h6>2020-2023</h6>
                    <h5>Sema</h5>
                    <p>А в 2020 году занова перешеол в лицей.</p>
                </li>

                <li>
                    <h6>2023-2025</h6>
                    <h5>Ошму</h5>
                    <p>После 9 я ушел в колледж "Ошиму".</p>
                </li>
            </ul>`

edu.addEventListener('click' , () =>{
    res.innerHTML = texte;
    res.className = 'resume__right edu';
    edu.classList.add('primary');

    ab.classList.remove('primary')
    sk.classList.remove('primary')
    ex.classList.remove('primary')
})





const img = `<h4>Навыки</h4>


<ul>
   <img src="./img/pngwing.com (10).png" alt="">
   <img src="./img/pngwing.com (11).png" alt="">
   <img src="./img/pngwing.com (12).png" alt="">
   <img src="./img/pngwing.com (60).png" alt="">
   <img src="./img/pngwing.com (61).png" alt="">
   <img src="./img/pngwing.com (82).png" alt="">
   <img src="./img/pngwing.com (83).png" alt="">
</ul>
`
const sk = document.querySelector('.skil__btn')
sk.addEventListener('click' , () =>{
    res.innerHTML = img;
    res.className = 'resume__right skil'
    sk.classList.add ('primary')

    ab.classList.remove('primary')
    edu.classList.remove('primary')
    ex.classList.remove('primary')
})



const texta = `<h4>Обо мне</h4>
            <p></p>
            <ul>
                <li>
                    <h6>ФИО:</h6>
                    <h5>Акимов Билал Рустамович</h5>
                 
                </li>

                <li>
                    <h6>Оброзование:</h6>
                    <h5>Средное</h5>
                   
                </li>

                <li>
                    <h6>Email:</h6>
                    <h5>akimovbilal2@gmail.com</h5>
                    
                </li>

                <li>
                    <h6>Языки:</h6>
                    <h5>Кыргызский, руский, узбекский</h5>
                    
                </li>

                <li>
                    <h6>Тел:</h6>
                    <h5>+996 502 861 838</h5>
                    
                </li>

                <li>
                    <h6>Инста:</h6>
                    <h5>@akimovl.design</h5>
                    
                </li>
            </ul>
`


const ab = document.querySelector('.about__btn');
ab.addEventListener('click', () =>{
    res.innerHTML = texta;
    res.className = 'resume__right about'
    ab.classList.add('primary')

    sk.classList.remove('primary')
    edu.classList.remove('primary')
    ex.classList.remove('primary')
})




const th = document.querySelector('.nav__theme-btn');
th.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variablse')
    if(document.body.classList == ''){
        th.innerHTML = '<i class="uil uil-moon"></i>'
        window.localStorage.setItem('portfolio-theme', '')
    }else{
        th.innerHTML = '<i class="uil uil-sun"></i>'
        window.localStorage.setItem('portfolio-theme', 'dark-theme-variablse')

    }
})


const bd = window.localStorage.getItem('portfolio-theme');
document.body.className = bd;


// Получаем все кнопки и проекты
const projectBtns = document.querySelectorAll('.project__ctg .btn');
const projects = document.querySelectorAll('.project__container article');

// Функция фильтрации
function filterProjects(category) {
    projects.forEach(project => {
        // Сначала показываем все проекты при выборе "Все"
        if (category === 'all') {
            project.style.display = 'block';
            return;
        }
        
        // Проверяем наличие класса категории
        if (project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Добавляем обработчики для всех кнопок
projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем класс primary у всех кнопок
        projectBtns.forEach(b => b.classList.remove('primary'));
        
        // Добавляем класс primary текущей кнопке
        btn.classList.add('primary');
        
        // Определяем категорию для фильтрации
        let category;
        if (btn.classList.contains('all')) category = 'all';
        else if (btn.classList.contains('soc')) category = 'soc';
        else if (btn.classList.contains('pos')) category = 'pos';
        else if (btn.classList.contains('inf')) category = 'inf';
        
        // Применяем фильтр
        filterProjects(category);
    });
});

// При загрузке страницы показываем все проекты
window.addEventListener('load', () => {
    filterProjects('all');
    // Делаем активной кнопку "Все"
    document.querySelector('.btn.all').classList.add('primary');
});

// Добавляем стили для плавных переходов
const styles = document.createElement('style');
styles.textContent = `
    .project__container article {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(styles);

