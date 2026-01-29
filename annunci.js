fetch('./annunci.json').then((response)=> response.json()).then((data)=>{

    data.sort((a,b)=> a.price - b.price);
    
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardsWrapper = document.querySelector('#cardsWrapper');
    
    function radioCreate(){
        let categories = data.map((annuncio)=> annuncio.category);
        
        let uniqueCategories = Array.from(new Set (categories));
        
        uniqueCategories.sort();
        
        uniqueCategories.forEach((category)=> {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `<input class="form-check-input" type="radio" name="categories" role="button" id="${category}">
            <label class="form-check-label" role="button" for="${category}">
            ${category}
            </label>`;
            
            radioWrapper.appendChild(div)
        });
    }
    
    radioCreate()
    
    
    function truncateWord(string){
        if(string.length > 15){
            return string.split(' ')[0]+'...';
        }else{
            return string;
        }
    }
    
    function createCard(array){
        cardsWrapper.innerHTML='';
        array.forEach((annuncio, i)=>{
            let div = document.createElement('div');
            div.classList.add('card','col-10','col-md-4', 'col-lg-3', 'mx-3', 'my-3');
            div.innerHTML= `<img class="cardImg img-fluid" src="https://picsum.photos/${300+i}" alt="immagine prodotto ${annuncio.id}">
            <h4 title="${annuncio.name}">${truncateWord(annuncio.name)}</h4>
            <p>${annuncio.category}</p>
            <p>${annuncio.price} €</p>`;
            
            cardsWrapper.appendChild(div);
        });
    }
    
    createCard(data)
    
    let radioButton = document.querySelectorAll('.form-check-input');

    function filteredByCategory(array) {
        let categoria = Array.from(radioButton).find( (bottone)=> bottone.checked).id;

        console.log(categoria);
        

        if(categoria != 'All'){
        let filtered = array.filter( (annuncio)=> annuncio.category == categoria );
        return filtered;
        }else{
            return;
        }
    }
    

    
    radioButton.forEach((button)=>{
        button.addEventListener('click', ()=>{
            globalFilter(button.id);
        });
    });

    let range = document.querySelector('#range');
    let priceValue = document.querySelector('#priceValue')

    function priceInput(){
        let prices = data.map((annuncio)=> +annuncio.price);
        prices.sort((a, b)=> a - b);
        let maxPrice = Math.ceil(prices.pop());
        range.max = maxPrice;
        range.value = maxPrice;
        priceValue.innerHTML = maxPrice;

    }
    
    priceInput();

    function filteredByPrice(array){
        let filtered = array.filter((annuncio)=> +annuncio.price <= range.value);
        return filtered;
    }

    range.addEventListener('input', ()=>{
        globalFilter();
        priceValue.innerHTML = range.value;
    });
    

    let wordInput = document.querySelector('#wordInput');

    function filteredByWord(array){
        let filtered = array.filter((annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()));
        return filtered;
    };

    wordInput.addEventListener('input', ()=>{
        globalFilter();
    });

    function globalFilter(){
        let filterByCategory = filteredByCategory(data);
        let filterByPrice = filteredByPrice(filterByCategory);
        let filterByWord = filteredByWord(filterByPrice);

        createCard(filterByWord);
    };

});