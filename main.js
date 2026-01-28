

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');
let swiperWrapper = document.querySelector('.swiper-wrapper');

let check = true;

function intervalNumber(n, element, time){
    let counter = 0;
    
    let interval= setInterval(() => {
        if (counter < n) {
            counter++;
            element.innerHTML = `${counter}+`;
        } else {
            clearInterval(intervalNumber);
        }
    }, time);
    
    setTimeout(() => {
        check = true;
    }, 7000);
};

let intersectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && check) {
            intervalNumber(1500, firstNumber, 5);
            intervalNumber(870, secondNumber, 10);
            intervalNumber(560, thirdNumber, 15);
            check = false;
        }
    });
});

intersectObserver.observe(firstNumber);

let reviews = [
    { user: 'Matteo', description: 'Ottimo sito', voto: '4'},
    { user: 'Chiara', description: 'Sito mediocre', voto: '3'},
    { user: 'Giuseppe', description: 'Il sito più bello del mondo', voto: '5'},
    { user: 'Sara', description: 'Acquisto non consegnato', voto: '1'},
    { user: 'Alessio', description: 'Belle offerte', voto: '4'}
]

reviews.forEach((review)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide', 'd-flex', 'flex-column');
    div.innerHTML = 
    `<p class="lead text-center">${review.description}</p>
        <p class="h4 text-center">${review.user}</p>
        <div class="d-flex star">
        </div>`;
    swiperWrapper.appendChild(div);
});


let star = document.querySelectorAll('.star')

star.forEach((star, index) =>{
    for (let i=1; i<= reviews[index].voto; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon);
    }
}); 


// swiper
const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

