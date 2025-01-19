// Sum of numbers

let calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
   let userNumberInputElement = document.getElementById('user-number');
   let enteredNumber = userNumberInputElement.value;
   let sumUptoNumber = 0;
   for(let i=1; i<=enteredNumber; i++) 
   {
      sumUptoNumber = sumUptoNumber + i;  
   }
   let calculatedSum = document.getElementById('calculated-sum');
   calculatedSum.textContent=sumUptoNumber;
   calculatedSum.style.display='block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// Highight links

let highlightLinksButton = document.querySelector('#highlight-links button');

function highlightLinks() {
    let anchorElements = document.querySelectorAll('#highlight-links a');
    for(let anchorElement of anchorElements)
    {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButton.addEventListener('click', highlightLinks);

//Display your Data

const dummyUserdata = {
    name:'Aakash',
    lastname:'Kshirsagar',
    age:20,
};

let b1 = document.querySelector('#user-data button');

function displayUserData() {
    
    const outputDataElement = document.querySelector('#output-user-data');
    outputDataElement.innerHTML='';

    for(const propertyKey in dummyUserdata)
    {
        let newUserDataListItemElement = document.createElement('li');
        let outputText = propertyKey.toUpperCase()+': '+dummyUserdata[propertyKey] ;
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }

}

b1.addEventListener('click', displayUserData);

//Statistics

const rollDiceButtonElement = document.querySelector('#statistics button');

function deriveNumberofDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const enteredNumber = targetNumberInputElement.value;
    const diceRollsListElement = document.getElementById('dice-rolls');
    diceRollsListElement.innerHTML = '';
    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber)
    {
        const rolledNumber = rollDice();

        if(rolledNumber==enteredNumber)
        {
            hasRolledTargetNumber = true;
        }
        numberOfRolls++;
        const newRollsListItemElement = document.createElement('li');
        const outputText = `Roll${numberOfRolls}: ${rolledNumber}`;
        newRollsListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollsListItemElement);
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');
    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

function rollDice()
{
    return Math.floor(Math.random()*6)+1;
}

rollDiceButtonElement.addEventListener('click', deriveNumberofDiceRolls);
