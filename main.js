let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

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
    
    