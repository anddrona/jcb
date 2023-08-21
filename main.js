'use strict'
const PriceButtons = document.querySelectorAll('.price');
const ModalPrice = document.querySelector('.modal-price');
const LisingButtons = document.querySelectorAll('.lising');
const ModalLising = document.querySelector('.modal-lising');
const ModalClose = document.querySelectorAll('.modal__close');

PriceButtons.forEach(ButtonTarget => {
    ButtonTarget.addEventListener('click', function(e){
        ModalPrice.style.display = 'flex';
        return ButtonTarget
    })
})

LisingButtons.forEach(ButtonTarget => {
    ButtonTarget.addEventListener('click', function(e){
        ModalLising.style.display = 'flex';
        return ButtonTarget
    })
}) 


ModalClose.forEach(CloseWindowTarget => {
    CloseWindowTarget.addEventListener('click', function(e){
        ModalPrice.style.display = 'none';
        ModalLising.style.display = 'none';
    })
})


let phoneInputs = document.querySelectorAll('input[data-tel-input]');
let getInputNumbersValue = function(input){
    return input.value.replace(/\D/g, "");
}

let OnPhoneInput = function(e){
    let input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    formattedInputValue = "";


    if(!inputNumbersValue){
        return input.value = "";
    }

    if(["7","8","9"].indexOf(inputNumbersValue[0]) > -1){

        if (inputNumbersValue[0]=="9") inputNumbersValue ="7" + inputNumbersValue;
        let firstSymbols = (inputNumbersValue[0]=="8") ? "8": "+7";
        formattedInputValue = firstSymbols + " ";
        if (inputNumbersValue.length > 1){
            formattedInputValue += "(" + inputNumbersValue.substring(1,4);
        }
        if(inputNumbersValue.length >= 5){
            formattedInputValue += ") " + inputNumbersValue.substring(4,7);
        }
        if(inputNumbersValue.length >= 8){
            formattedInputValue += "-" + inputNumbersValue.substring(7,9);
        }
        if(inputNumbersValue.length >= 10){
            formattedInputValue += "-" + inputNumbersValue.substring(9,11);
        }
    }else {
        formattedInputValue = "+" + inputNumbersValue.substring(0,16);
    }
    input.value = formattedInputValue;
}

let OnPhoneKeyDown = function(e){
    let input = e.target;
    if(e.keyCode == 8 && getInputNumbersValue(input).length == 1){
        input = "";
    }
}

for( let i=0;i<phoneInputs.length;i++){
    let input = phoneInputs[i];
    input.addEventListener('input', OnPhoneInput);
    input.addEventListener("keydown", OnPhoneKeyDown)
}