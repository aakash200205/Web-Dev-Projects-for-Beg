let productNameInputElement=document.getElementById('product-name');
let remainingCharsElement=document.getElementById('remaining-chars');

function updateRemainingCharacters(event)
{
    let enteredText=event.target.value;
    let enteredTextLength=enteredText.length;
    let maxAllowedChars=productNameInputElement.maxLength;
    let remainingCharacters=maxAllowedChars-enteredTextLength;
    remainingCharsElement.textContent=remainingCharacters;
}


productNameInputElement.addEventListener('input', updateRemainingCharacters);