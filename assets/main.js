const selectionPeople = document.getElementById('people');
const selectionServices = document.getElementById('services');
const result = document.querySelector('.result');
const customSelect = document.querySelector('.custom-select');
const formSubmit = document.querySelector('.form-submit');
const customRoom = document.querySelector('#custom-room');
const customAdult = document.querySelector('#custom-adult');
customRoom.value = 0;
customAdult.value = 0;

let moneyServices = 0;
let moneyPeople = 0;
formSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    result.innerHTML = moneyServices + moneyPeople;
})
selectionPeople.addEventListener('change',()=>{
    const selectValuePeople = selectionPeople.options[selectionPeople.selectedIndex].value;
    
    if (selectValuePeople == 3){
        customSelect.classList.remove('hide');
        customSelect.classList.add('show');
    }
    else if(selectValuePeople == 1){
        moneyPeople = 50;
        customSelect.classList.remove('show');
        customSelect.classList.add('hide');
    }
    else if(selectValuePeople == 2){
        moneyPeople = 100;
        customSelect.classList.remove('show');
        customSelect.classList.add('hide');
    }
})
selectionServices.addEventListener('change',()=>{
    const selectValueServices = selectionServices.options[selectionServices.selectedIndex].value;
    if (selectValueServices == 1){
        moneyServices = 200;
    }
    else if(selectValueServices == 2){
        moneyServices = 150;
    }
    else if(selectValueServices == 3){
        moneyServices = 100;
    }
    else if(selectValueServices == 4){
        moneyServices = 50;
    }
})