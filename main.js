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
const text = `<h4>Өмүр баяным</h4>
            <p>Мен, Кошуева Даркүл Баатыровна, 1974-жылы 6-майда интеллигенттин үй-бүлөсүндө туулгам. 1981-жылы Ош облусунун Ноокат районуна караштуу Ломоносов атындагы орто мектебинин 1-классына кабыл алынып, 1991-жылы аталган мектепти күмүш медаль менен аяктадым.
            Ошол эле жылы жогорку билим алуу максатында Ош мамлекеттик педагогикалык институтунун филология факультетине тапшырдым. 1996-жылы Ош мамлекеттик университетинин филология факультетин артыкчылык диплом менен бүтүрдүм.</p>
            <ul>
                <li>
                    <h6>1997-2010</h6>
                    <h5>Алтын-Казык орто мектеби</h5>
                    <p>Бул жерде жаш муундарга билим берип, педагогикалык тажрыйба топтодум.</p>
                </li>

                <li>
                    <h6>2010-2014</h6>
                    <h5>Макаренко орто мектеби</h5>
                    <p>Мында окутуунун заманбап ыкмаларын колдонуу аркылуу окуучулардын билим сапатын жогорулатууга аракет кылдым.</p>
                </li>

                <li>
                    <h6>2014</h6>
                    <h5>Алымбек Датка лицейи</h5>
                    <p>Ишмердүүлүгүмдүн негизги максаты – окуучуларга сапаттуу билим берүү, алардын ой жүгүртүүсүн, чыгармачылыгын жана инсандык сапаттарын өнүктүрүүгө көмөк көрсөтүү.</p>
                </li>

                <li>
                    <h6></h6>
                    <h5>Менин педагогикалык принциптерим</h5>
                    <p>Ар бир окуучуга тең мүмкүнчүлүк берүү.

Изденүү жана жаңылануу.

Сабактарды чыгармачылык менен өткөрүү.

Ынтымак жана сый-урмат.</p>
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
const texte = `<h4>Илимий-усулудук ишмердик</h4>
            <p></p>
            <ul>
                <li>
                    <h5>Ычкам тапшырмалар, олимпиада</h5>
                    
                    <p><a href="https://drive.google.com/drive/u/0/folders/1_1idsBm-xcf1EPjyd1KpFp_RTfz5S_Tk">Иштерим ссылка</a></p>
                </li>
                <li>
                    <h6></h6>
                    <h5>Сабактын иштелмелери</h5>
                    <p><a href="https://drive.google.com/drive/u/0/folders/1f3iRruwYoJF97WGgwJhrpxqq0WTleYDe">Иштерим ссылка</a></p>
                </li>
                <li>
                    <h6></h6>
                    <h5>Презентациялар</h5>
                    <p> <a href="https://drive.google.com/drive/folders/1acbdXbcRGRGmxfLXSZFkFGylMgBR0sJl?usp=drive_link">Иштерим ссылка</a></p>
                </li>
                <li>
                    <h6></h6>
                    <h5>Методикалык колдонмолор</h5>
                    <p><a href="https://drive.google.com/drive/folders/1g_PS2lWR2Ke6bzgGtpVN9cLiWAU8COXS?usp=drive_link">Иштерим ссылка</a>  </p>
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





const img = `<h4>Сыйлыктар</h4>


<ul>
  <img src="./img/апам1.jpg" alt="">
<img src="./img/апам2.jpg" alt="">
<img src="./img/апам3 (2).jpg" alt="">
<img src="./img/апам4.jpg" alt="">
<img src="./img/апам5.jpg" alt="">
<img src="./img/апам6 (2).jpg" alt="">
   
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



const texta = `<h4>Мен жөнүндө</h4>
            <p></p>
            <ul>
                <li>
                    <h6>Аты-жөнү:</h6>
                    <h5>Кошуева Даркүл Баатыровна</h5>
                 
                </li>

                <li>
                    <h6>Билими:</h6>
                    <h5>Жогорку</h5>
                   
                </li>

                <li>
                    <h6>Email:</h6>
                    <h5>darkulkowueva@gmail.com</h5>
                    
                </li>

                <li>
                    <h6>Тил:</h6>
                    <h5>Кыргыз,орус,өзбек</h5>
                    
                </li>

                <li>
                    <h6>Тел:</h6>
                    <h5>+996 552 35 60 35</h5>
                    
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





edu.addEventListener('click' , () =>{
    res.innerHTML = texte;
    res.className = 'resume__right edu';

    // находим ВСЕ ссылки
    const links = res.querySelectorAll('a');

    // меняем цвет каждой
    links.forEach(link => {
        link.style.setProperty('color','white','important');
    });

    edu.classList.add('primary');
    ab.classList.remove('primary')
    sk.classList.remove('primary')
    ex.classList.remove('primary')
})