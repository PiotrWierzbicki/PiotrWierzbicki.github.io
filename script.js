const selector = document.querySelector('#fuelRatioSelector');
const photo = document.querySelector('.photo');
const button = document.querySelector('button');
const input = document.querySelector('input');
const warning = document.querySelector('.warning')
const oil = document.querySelector('.oil');
const gasoline = document.querySelector('.gasoline');
const fuel = document.querySelector('.fuel');

const computeFuel = () => {
    if(input.value <= 0) {
        warning.textContent="Wprowadź liczbe większą niż 0";
    } else {
        warning.textContent = "";
        const oilML = (input.value/selector.value) * 1000;
        oil.textContent = Math.round(oilML) + 'ml';
        gasoline.textContent = Math.round(input.value*1000 - oilML) + 'ml';
        fuel.textContent = input.value*1000 + 'ml'; 
    }
}

const setNewPhoto = () => {
    if(selector.value == 20) {
        photo.setAttribute('src', './img/20.jpg');
    } else if(selector.value == 25) {
        photo.setAttribute('src', './img/25.jpg');
    } else if(selector.value == 30) {
        photo.setAttribute('src', './img/30.jpg');
    } else if(selector.value == 35) {
        photo.setAttribute('src', './img/35.jpg');
    } else if(selector.value == 40) {
        photo.setAttribute('src', './img/40.jpg');
    } else {
        photo.setAttribute('src', './img/50.jpg');
    }
}

const enterCheck = (e) => {
    if(e.key === 'Enter') {
        computeFuel();
    }    
}

input.addEventListener('keyup', enterCheck);
selector.addEventListener('change', setNewPhoto);
button.addEventListener('click', computeFuel);