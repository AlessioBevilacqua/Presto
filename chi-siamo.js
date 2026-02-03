let opener = document.querySelector('.opener');
let circle = document.querySelector('.circle');
let flipCard = document.querySelector('.flip-card');

let check = false;

let owners= [
    { name: 'Alessia Rossi', description: 'Sviluppatrice front-end: ottimizza ricerca e filtri per migliorare la scoperta degli annunci e l\'esperienza mobile.', url: './media/alessia-face.jpg', img: './media/alessia.jpg' },
    { name: 'Marco Bianchi', description: 'Back-end engineer: costruisce API robuste, sistemi di autenticazione e integrazioni per pagamenti sicuri.', url: './media/marco-face.jpg', img: './media/marco.jpg' },
    { name: 'Giulia Verdi', description: 'UI/UX Designer: progetta schede prodotto chiare e flussi di pubblicazione che aumentano fiducia e conversione.', url: './media/giulia-face.jpg', img: './media/giulia.jpg' },
    { name: 'Pietro Lino', description: 'Operations & quality: modera annunci, gestisce segnalazioni e migliora la fiducia nella piattaforma.', url: './media/Pietro-face.jpg', img: './media/Pietro.jpg' }
];


owners.forEach( (owner) => {
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${owner.url}`
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll('.moved');

opener.addEventListener('click', ()=>{
    if(check == false){
        check = true;
        opener.style.transform = `rotate(45deg)`;
        movedDivs.forEach( (moved, i) =>{
            let angle = (360 * i)/ movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(125px) rotate(-${angle}deg)`;
        });
    }else{
        check = false
        opener.style.transform = ``;
        movedDivs.forEach( (moved, i) =>{
            let angle = (360 * i)/ movedDivs.length;
            moved.style.transform = ``;
            flipCard.classList.add('d-none');
    });
}});

let innerFace = document.querySelector('.inner-face');
let cardName = document.querySelector('.cardName');
let cardDescription = document.querySelector('.cardDescription');


movedDivs.forEach((moved, i)=>{
    moved.addEventListener('click', ()=>{
        let owner = owners[i];
        innerFace.style.backgroundImage = `url(${owner.img})`;
        cardName.innerHTML = owner.name;
        cardDescription.innerHTML = owner.description;
        flipCard.classList.remove('d-none');
        });
});
